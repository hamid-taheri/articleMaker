import styled from "./sidebar.module.css";

function Sidebar(){
    return(
        <div className={styled.sidebar}>
            <div>
                <a href="http://sid.ir">جهاد دانشگاهی</a>
            </div>
            <div>
                <a href="http://sid.ir">نشریات کشور</a>
            </div>
            <div>
                <a href="http://sid.ir">پایگاه مجلات نور</a>
            </div>
            <div>
                <a href="http://sid.ir">کنفرانس و ژورنال</a>
            </div>
            <div>
                <a href="http://sid.ir">بانک پایان نامه</a>
            </div>
            <div>
                <a href="http://sid.ir">مقالات فارسی</a>
            </div>
            <div>
                <a href="http://sid.ir">دانلود کتاب</a>
            </div>
        </div>
    )
}

export default Sidebar;