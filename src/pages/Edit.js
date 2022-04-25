import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DiaryStateContext } from "../App";
import DiaryEditor from "../components/DiaryEditor";

const Edit = ()=>{
    const [originData, setOriginData] = useState();
    const navigate = useNavigate();
    const { id } = useParams();
    // console.log(id);
   
    const diaryList = useContext(DiaryStateContext);
    // console.log(id);
    // console.log(diaryList);

    useEffect(()=>{
        const titleElement = document.getElementsByTagName('title')[0];
        titleElement.innerHTML = `감정 일기장 - ${id}번 일기 수정`;
    }, []);

    useEffect(()=> {
        if(diaryList.length >= 1){
            const targetDiary = diaryList.find(
                (it)=> parseInt(it.id) === parseInt(id)
            );
            // console.log(targetDiary);

            if(targetDiary){
                setOriginData(targetDiary);
            }else{
                navigate('/', {replace: true});
            }
        }
    }, [id, diaryList]);

    return(
        <div>
            <h2>{originData && <DiaryEditor isEdit={true} originData={originData} />}</h2>
        </div>
    );
}

export default Edit;