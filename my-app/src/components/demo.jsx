import React, { useState } from "react";

function DropdownForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    game: "Cricket",
    player: "Sachin",
    familyMember: "Sara",
    hobby: "Singing",
  });

  const gamess = { Games: ["Cricket", "Chess", "Football"] };

  const players = {
    Cricket: ["Sachin", "Kohli", "Dhoni"],
    Football: ["Ronaldo", "Messi", "Neymar"],
    Chess: ["Magnus", "Anand", "Hikaru"],
  };

  const familyMembers = {
    Sachin: ["Anjali", "Arjun", "Sara"],
    Kohli: ["Anushka", "Vamika"],
    Dhoni: ["Sakshi", "Ziva"],
    Ronaldo: ["Georgina", "Cristiano"],
    Messi: ["Antonella", "Thiago"],
    Neymar: ["Mihir", "Dev"],
    Magnus: ["Vora", "Tejas"],
    Anand: ["Aruna", "Akhil"],
    Hikaru: ["abc", "xyz"],
  };

  const hobbies = {
    Anjali: ["Cooking", "Travel"],
    Arjun: ["Cricket", "Guitar"],
    Sara: ["Dance", "Singing"],
    Anushka: ["Acting", "Yoga"],
    Vamika: ["Painting"],
    Sakshi: ["Writing", "Cooking"],
    Ziva: ["Singing", "Drawing"],
    Georgina: ["Modeling", "Fitness"],
    Cristiano: ["Football", "Gaming"],
    Antonella: ["Cooking", "Travel"],
    Thiago: ["Football", "Music"],
    Mihir: ["Freefire", "Cooking"],
    Dev: ["BGMI", "Reading"],
    Vora: ["Reading", "Swimming"],
    Tejas: ["Singing", "Chess"],
    Aruna: ["Cooking", "Travel"],
    Akhil: ["Cricket", "Gaming"],
    abc: ["Coding", "Streaming"],
    xyz: ["Drawing", "Chess"],
  };

  const [errors, setErrors] = useState({});

  const validate = () => {
    let formErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      formErrors.name = "Name is required";
      isValid = false;
    } else if (formData.name.length < 3) {
      formErrors.name = "Name must be at least 3 characters";
      isValid = false;
    }

    if (!formData.email.trim()) {
      formErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Email is not valid";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "game")
    {
      const firstPlayer = players[value];
      const firstFamily = familyMembers[firstPlayer];
      const firstHobby = hobbies[firstFamily];
      setFormData({...formData,game: value,player: firstPlayer,familyMember: firstFamily,hobby: firstHobby,});
    } 
    else if (name === "player") 
    {
      const firstFamily = familyMembers[value];
      const firstHobby = hobbies[firstFamily];
      setFormData({...formData,player: value,familyMember: firstFamily,hobby: firstHobby,});
    } 
    else if (name === "familyMember") 
    {
      const firstHobby = hobbies[value];
      setFormData({...formData,familyMember: value,hobby: firstHobby,});
    } 
    else if (name === "hobby") 
    {
      setFormData({...formData,hobby: value,});
    } 
    else 
    {
      setFormData({...formData,[name]: value,});
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully");
      console.log("Form Data:", formData);

      setFormData({
        name: "",
        email: "",
        game: "Cricket",
        player: "Sachin",
        familyMember: "Sara",
        hobby: "Singing",
      });
    }
  };

  return (
    <div>
      <h2>Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        </div>

        <div>
          <label>Email: </label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>

        <div>
          <label>Game: </label>
          <select name="game" value={formData.game} onChange={handleChange}>
            {gamess.Games.map((g) => (
              <option key={g} value={g}>{g}</option>
            ))}
          </select>
        </div>

        <div>
          <label>Player: </label>
          <select name="player" value={formData.player} onChange={handleChange}>
            {(players[formData.game] || []).map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </div>

        <div>
          <label>Family Member: </label>
          <select name="familyMember" value={formData.familyMember} onChange={handleChange}>
            {(familyMembers[formData.player] || []).map((f) => (
              <option key={f} value={f}>{f}</option>
            ))}
          </select>
        </div>

        <div>
          <label>Hobby: </label>
          <select name="hobby" value={formData.hobby} onChange={handleChange}>
            {(hobbies[formData.familyMember] || []).map((h) => (
              <option key={h} value={h}>{h}</option>
            ))}
          </select>
        </div>

       
          <p><b>Hobby:</b> {formData.hobby}</p>
      

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default DropdownForm;
