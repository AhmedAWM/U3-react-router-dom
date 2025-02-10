import { useState, useEffect, use } from 'react';
import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router';

function StudentDetails() {
    const [student, setStudent] = useState(null);
    const {studentID} = useParams();

    async function getStudentDetails() {
        console.log(studentID);
        const studentInfo = await axios.get(`${import.meta.env.VITE_API_URL}/${studentID}`);

        setStudent(studentInfo.data);
    }

    useEffect(() => {
        getStudentDetails();
    },[])

    return (
        <>
        { student && (
            <div>
                <h1>{ student.studentName }</h1>
                <p>City: { student.city }</p>
                <p>Course: { student.course }</p>
            </div>
        )}
        </>
    )
}

export default StudentDetails;