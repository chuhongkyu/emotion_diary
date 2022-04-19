import { useState } from "react";
import { useNavigate } from "react-router-dom";

import MyHeader from "./MyHeader";
import MyButton from "./MyButton";

const getStringDate = (date) =>{
    return date.toISOString().slice(0, 10);
};


const DiaryEditor = ()=>{
    const [date, setDate] = useState(getStringDate(new Date()));
    const navigate = useNavigate();

    return(
        <div className="DiaryEditor">
            <MyHeader
                headText={"새 일기 쓰기"} 
                leftChild={<MyButton text={'< 뒤로가기'} onClick={()=> navigate(-1)}/>}
            />
            <div>
                <section>
                    <h4>오늘은 언제인가요?</h4>
                    <div className="input_box">
                        <input
                            className="input_date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)} 
                            type="date" 
                        />
                    </div>
                </section>
            </div>
        </div>
    );
}

export default DiaryEditor;