import "./ContactForm.css";
import "./ContactFormSkeleton.css";

export default function ContactForm() {

    const contactType: string[] = [
        "お仕事のご相談",
        "協業・ご提案",
        "ページ内容の修正",
        "その他"
    ]

    return (
        <form method="POST">
                        <h3 className="contact-items__title"><span className="contact-items__title__skeleton"/></h3>
                        <div className="contact-item__wrapper">
                            <div className="contact-item">
                                <label className="contact-item__title" htmlFor="contactType"><span className="contact-item__title__skeleton"/></label>
                                <div className="contact-item-radio__wrapper">
                                    {contactType.map((item) => {
                                        return (
                                            <label className="contact-item-radio" key={item}>
                                                <input type="radio" className="contact-item-radio__btn" />
                                                <span className="contact-item-radio__text">
                                                    <span className="contact-item-radio__text__skeleton"/>
                                                </span>
                                            </label>
                                        )
                                    })}
                                </div>
                            </div>

                            <div className="contact-item">
                                <label className="contact-item__title" htmlFor="detail"><span className="contact-item__title__skeleton"/></label>
                                <textarea className="contact-item__form"  id="detail" />
                            </div>
                        </div>

                        <h3 className="contact-items__title"><span className="contact-items__title__skeleton"/></h3>
                        <div className="contact-item__wrapper">

                            <div className="contact-item">
                                <label className="contact-item__title" htmlFor="yourName"><span className="contact-item__title__skeleton"/></label>
                                <input className="contact-item__form" type="text" id="name" />
                            </div>

                            <div className="contact-item">
                                <label className="contact-item__title" htmlFor="tel"><span className="contact-item__title__skeleton"/></label>
                                <input className="contact-item__form" type="text" id="tel" />
                            </div>
                            
                            <div className="contact-item">
                                <label className="contact-item__title" htmlFor="email"><span className="contact-item__title__skeleton"/></label>
                                <input className="contact-item__form" type="email" 
                                id="email" />
                            </div>
                        </div>
                        <div className="contact-acceptance">
                            <input type="checkbox" className="contact-acceptance__check" name="acceptance" id="acceptance"/>
                            <label htmlFor="acceptance" className="contact-acceptance__text">
                                <span className="contact-acceptance__text__skeleton"/>
                            </label>
                        </div>

                        <div className="contact-submit">
                            <button className="contact-submit__btn" disabled={true} type="submit"><span className="contact-submit__btn__skeleton"/></button>
                        </div>
                    </form>
    )
}