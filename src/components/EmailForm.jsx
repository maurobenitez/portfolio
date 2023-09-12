import { BASE_URL } from "../../config/config";
import axios from 'axios';
import { useState } from "react";
import TextField from '@mui/material/TextField';
const EmailForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        subject: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState({
        name: '',
        subject: '',
        email: '',
        message: '',
    });
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            console.log(`${BASE_URL}/emailService`);
            const response = await axios.post(`${BASE_URL}/emailService`, formData);
            console.log('Response:', response.data);
            setFormData({
                name: '',
                subject: '',
                email: '',
                message: '',
            });
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <h2>Contáctame</h2>
            <form onSubmit={handleSubmit}>
                {/* <div>
                    <label htmlFor="name">Nombre:</label>
                    
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                </div> */}
                <TextField
                    id="name"
                    label="Nombre"
                    variant="outlined"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                />
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                {/*  <div>
                    <label htmlFor="subject">Subject:</label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                    />
                </div> */}
                <div>
                    <label htmlFor="message">Mensaje:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default EmailForm;