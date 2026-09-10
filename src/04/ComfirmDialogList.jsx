import React from "react";
import ComfirmDialog from "./ComfirmDialog";

function ComfirmDialogList(){
    return(
        <div>
            <ComfirmDialog>내용</ComfirmDialog><br/><br/>
            <ComfirmDialog>방송</ComfirmDialog><br/><br/>
            <ComfirmDialog>게시글</ComfirmDialog><br/><br/>

        </div>
    )

}

export default ComfirmDialogList;