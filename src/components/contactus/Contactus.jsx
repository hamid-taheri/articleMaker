import styled from "./contactus.module.css"

function Contactus() {
    return (
        <div className={styled.contactus}>
            <p>
                آدرس: ایران، تهران، خیابان پیروزی، خیابان اول نیروهوایی
            </p>
            <p>
                تلفن: 02177665544
            </p>
            <p>
                موبایل: 09123456789
            </p>
            <p>
               ایمیل: maghalehsaz@gmail.com 
            </p>
        </div>
    )
}

export default Contactus;