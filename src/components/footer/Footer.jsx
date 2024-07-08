import styled from "./footer.module.css"

function Footer() {
    return (
        <div className={styled.footer}>
            <div>
                آدرس: ایران، تهران، خیابان پیروزی، خیابان اول نیروهوایی
            </div>
            <div>
                تلفن: 02177889922
            </div>
            <div>
                موبایل: 0912556677
            </div>
            <div>
                ایمیل: maghalehsaz@gmail.com
            </div>
        </div>
    )
}

export default Footer;