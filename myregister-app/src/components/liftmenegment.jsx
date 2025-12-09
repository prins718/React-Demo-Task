import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./lift.css";

const TOTAL_FLOORS = 6;

const LiftSystem = () => {
    const [currentFloor, setCurrentFloor] = useState(0);
    const [targetFloor, setTargetFloor] = useState(null);
    const [direction, setDirection] = useState("Idle");
    const [queue, setQueue] = useState([]);

    useEffect(() => {
        if (targetFloor === null && queue.length > 0) {
            setTargetFloor(queue[0]);
            setQueue((prev) => prev.slice(1));
        }
    }, [queue, targetFloor]);

    useEffect(() => {
        if (targetFloor === null) {
            setDirection("Idle");
            return;
        }

        if (currentFloor < targetFloor) {
            setDirection("Moving Up");
            const timer = setTimeout(() => setCurrentFloor((f) => f + 1), 1000);
            return () => clearTimeout(timer);
        } else if (currentFloor > targetFloor) {
            setDirection("Moving Down");
            const timer = setTimeout(() => setCurrentFloor((f) => f - 1), 1000);
            return () => clearTimeout(timer);
        } else {
            setDirection("Idle");
            setTargetFloor(null);
        }
    }, [currentFloor, targetFloor]);

    const callLift = (floor) => {
        if (floor === currentFloor || queue.includes(floor)) return;
        if (targetFloor === null) {
            setTargetFloor(floor);
        } else {
            setQueue((prev) => [...prev, floor]);
        }
    };

    return (
        <div className="lift-container">
            <h2 className="title">🏢 Lift Management System</h2>
            <p className="status">Status: {direction}</p>

            <div className="building">
                {[...Array(TOTAL_FLOORS)].map((_, index) => {
                    const floor = TOTAL_FLOORS - 1 - index;
                    return (
                        <div key={floor} className="floor">
                            <button onClick={() => callLift(floor)}>
                                Call Lift (Floor {floor})
                            </button>
                            <div className="shaft">
                                {currentFloor === floor && (
                                    <motion.div
                                        className="lift"
                                        layout
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        🚪
                                    </motion.div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default LiftSystem;
