import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import Edituser from "./Edituser";
const Edit = () => {
    let params = useParams();
    let navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0);
        edituserlist(params.ids);
    }, []);

    const [isuser, setuser] = useState([]);
    const [isloaduser, setloaduser] = useState(false);
    const edituserlist = async (ids) => {
        try {
            axios.post(`http://mgt2.pnu.ac.th/fizon/6460704001/getusers.php`, {
                userids: ids,
            })
                .then(res => {
                    console.log(res.data.userlist.userdata)
                    setuser(res.data.userlist.userdata[0]);
                    setloaduser(true);
                })
        } catch (error) { throw error; }
    }
    return (
        <div>
            {isloaduser &&
                <Edituser list={isuser} />
            }
        </div>
    )
}
export default Edit