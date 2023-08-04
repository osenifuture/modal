import { useState } from "react";

const Modal = () =>{
    const[isOpen, setisOpen] = useState(false);

    // const handelModal = () => {
    //     setisOpen(!isOpen)
    // };

    const handelOpenModal = () => {
        setisOpen(true)
    }

    const handelCloseModal = () => {
        setisOpen(false)
    }

    return(
        <div className="body">
        <div className="con-2">
            <div className="button-con">
            <button onClick={handelOpenModal}><i className="fa-solid fa-trash"></i></button>
            </div>
        </div>
        {
            isOpen && (
                <div className="con-3" >
                    <div className="mother-cancel">
                        <button onClick={handelCloseModal}><i className="fa-solid fa-xmark"></i></button>
                        <div className="cancel-con">
                            <h3 style={{margin: '10px'}}>Confirm delete !!!</h3>
                            <div className="line"></div>
                            <p style={{margin: '10px'}}>Are you sure you want to delete ? if yes click delete</p>
                        </div>
                    </div>
                </div>
            )
        }
    </div>
    );
    
};
export default Modal;