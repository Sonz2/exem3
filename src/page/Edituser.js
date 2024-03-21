import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Edituser = (props) => {
    const navigate = useNavigate();

    // สร้าง state ใหม่เพื่อเก็บข้อมูลผู้ใช้ที่จะแก้ไข
    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
    });

    // อัปเดต state เมื่อข้อมูล props เปลี่ยนแปลง
    useEffect(() => {
        setUserInfo({
            name: props.list.name,
            email: props.list.email,
        });
    }, [props.list]);

    // ฟังก์ชันเมื่อมีการเปลี่ยนแปลงในฟอร์ม
    const onChangeValue = (e) => {
        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value
        });
    }

    // ฟังก์ชันสำหรับส่งข้อมูลผู้ใช้ที่แก้ไขไปยังเซิร์ฟเวอร์
    const submitUser = async (event) => {
        try {
            event.preventDefault();
            const res = await axios.post(`http://mgt2.pnu.ac.th/fizon/6460704001/editusers.php`, {
                username: userInfo.name,
                useremail: userInfo.email,
                userids: props.list.user_id,
            });
            console.log(res.data);
            navigate(`/`); // นำทางกลับไปยังหน้า Home
        } catch (error) {
            throw error;
        }
    };

    return (
        <form className="editForm" onSubmit={submitUser}>
            <h2> Edit Form </h2>
            <label htmlFor="_name">Name</label>
            <input
                type="text"
                id="_name"
                name="name"
                value={userInfo.name}
                onChange={onChangeValue}
                placeholder="Enter name"
                autoComplete="off"
                required
            />
            <br /> <br />
            <label htmlFor="_email">Email</label>
            <input
                type="email"
                id="_email"
                name="email"
                value={userInfo.email}
                onChange={onChangeValue}
                placeholder="Enter email"
                autoComplete="off"
                required
            />
            <br /> <br />
            <input type="submit" value="update" />
        </form>
    );
};

export default Edituser;
