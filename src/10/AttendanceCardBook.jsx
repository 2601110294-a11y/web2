import React from "react";
import img1 from "./imgs/img1.png";
import "./AttendanceCardBook.css";

const students = [
    {
        id: 1,
        name: "Inje",
        grade: 1,
        major: "인공지능소프트웨어",
        avatar: img1
    },
    {
        id: 2,
        name: "Steve",
        grade: 2,
        major: "메카트로닉스",
        avatar: "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
        id: 3,
        name: "Bill",
        grade: 3,
        major: "전기전자",
        avatar: "https://randomuser.me/api/portraits/men/3.jpg"
    },
    {
        id: 4,
        name: "Jeff",
        grade: 4,
        major: "소프트웨어",
        avatar: "https://randomuser.me/api/portraits/men/4.jpg"
    },
];

function AttendanceCardBook(props) {
    return (
        <div>
            <h2>학생 출석부</h2>
            <div>
                {students.map(student => (
                    <div key={student.id}>
                        <img src={student.avatar} alt={student.name} />
                        <div>
                            <h3>{student.name}</h3>
                            <p>{student.grade}학년, {student.major}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AttendanceCardBook;