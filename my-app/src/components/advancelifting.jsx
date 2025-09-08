import React, { useState } from 'react';
function MultiStepForm() {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        // Personal Info
        firstName: '',
        lastName: '',
        email: '',
        // Address Info
        street: '',
        city: '',
        zipCode: '',
        // Preferences
        newsletter: false,
        notifications: false
    });
    const updateFormData = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };
    const nextStep = () => {
        setCurrentStep(prev => prev + 1);
    };
    const prevStep = () => {
        setCurrentStep(prev => prev - 1);
    };
    const handleSubmit = () => {
        console.log('Form submitted:', formData);
        alert('Form submitted successfully!');
    };
    return (
        <div className="multi-step-form">
            <div className="progress-bar">
                <div className={`step ${currentStep >= 1 ? 'active' : ''}`}>1</div>
                <div className={`step ${currentStep >= 2 ? 'active' : ''}`}>2</div>
                <div className={`step ${currentStep >= 3 ? 'active' : ''}`}>3</div>
            </div>
            {currentStep === 1 && (
                <PersonalInfo
                    data={formData}
                    updateData={updateFormData}
                    onNext={nextStep}
                />
            )}
            {currentStep === 2 && (
                <AddressInfo
                    data={formData}
                    updateData={updateFormData}
                    onNext={nextStep}
                    onPrev={prevStep}
                />
            )}
            {currentStep === 3 && (
                <Preferences
                    data={formData}
                    updateData={updateFormData}
                    onSubmit={handleSubmit}
                    onPrev={prevStep}
                />
            )}
        </div>
    );
}
function PersonalInfo({ data, updateData, onNext }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        if (data.firstName && data.lastName && data.email) {
            onNext();
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <h2>Personal Information</h2>
            <input
                type="text"
                placeholder="First Name"
                value={data.firstName}
                onChange={(e) => updateData('firstName', e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Last Name"
                value={data.lastName}
                onChange={(e) => updateData('lastName', e.target.value)}
                required
            />
            <input
                type="email"
                placeholder="Email"
                value={data.email}
                onChange={(e) => updateData('email', e.target.value)}
                required
            />
            <button type="submit">Next</button>
        </form>
    );
}
function AddressInfo({ data, updateData, onNext, onPrev }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        if (data.street && data.city && data.zipCode) {
            onNext();
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <h2>Address Information</h2>
            <input
                type="text"
                placeholder="Street Address"
                value={data.street}
                onChange={(e) => updateData('street', e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="City"
                value={data.city}
                onChange={(e) => updateData('city', e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="ZIP Code"
                value={data.zipCode}
                onChange={(e) => updateData('zipCode', e.target.value)}
                required
            />
            <button type="button" onClick={onPrev}>Previous</button>
            <button type="submit">Next</button>
        </form>
    );
}
function Preferences({ data, updateData, onSubmit, onPrev }) {
    return (
        <div>
            <h2>Preferences</h2>
            <label>
                <input
                    type="checkbox"
                    checked={data.newsletter}
                    onChange={(e) => updateData('newsletter', e.target.checked)}
                />
                Subscribe to newsletter
            </label>
            <label>
                <input
                    type="checkbox"
                    checked={data.notifications}
                    onChange={(e) => updateData('notifications', e.target.checked)}
                />
                Enable notifications
            </label>
            <button onClick={onPrev}>Previous</button>
            <button onClick={onSubmit}>Submit</button>
        </div>
    );
}

export default MultiStepForm;