import style from "./Reserve.module.css"
import arrow from "../../assets/arrow-left.svg"
import safe from "../../assets/safe-data-icon.svg"
import { Link } from "react-router-dom"
import DatePanel from "./DatePanel/DatePanel"
import { useState } from "react"
import { useSelector } from "react-redux"
import { useForm, Controller } from "react-hook-form";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css';

export default function Reserve(){
    const reserve = useSelector(state=> state.reserve.reserveList);
    const [amount, setAmount] = useState(reserve.price);
    const [isSubmitted, setIsSubmitted] = useState(false);

    function addPromoCode () {
        if (amount===reserve.price) {
            const newAmount = Math.round(amount-(amount * 5) / 100)+".00";
            setAmount(newAmount);
        }
    }

    const { register, setValue, control, handleSubmit, formState: { errors } } = useForm({mode: 'onChange'});
    const onApply = e=> {
        e.preventDefault();
        const inputValue = e.target.elements[0].value;
        if (inputValue === 'Promo2023') {
        console.log('Discount applied successfully!');
        addPromoCode();
        } else {
        console.log('Invalid discount code.');
        }
    };

    const onSubmit = data => {
        setIsSubmitted(true);
    };

    const handleNameChange = (e) => {
        const value = e.target.value;
        const id = e.target.id;
        setValue(id, value, { shouldValidate: true });
      };
    
    return (
       <div className={style.reserve}>
            <div className={style.backLink}>
                <Link to="/main" style={{textDecoration: 'none'}}>
                    <img src={arrow} alt="Back to all cars" />
                    Back
                </Link>
            </div>
            <div className={style.reserveBlocks}>
                <div className={style.leftBlock}>
                    <div  className={style.rentalInfo}>
                        <h1>Billing Info</h1>
                        <p>Please enter your billing info</p>
                        <p>Step 1 of 4</p>
                        <form className={style.infoForm} onSubmit={handleSubmit(onSubmit)}>
                            <label htmlFor="name">Name
                                <input 
                                    type="text" 
                                    placeholder="Your name"
                                    id="name"
                                    {...register("name", {
                                        required: true,
                                        pattern: {
                                            value:  /^[a-zA-Z\s]*$/,
                                            message: 'Please enter valid name'
                                        },
                                      })}
                                      onChange={handleNameChange}
                                      className={errors.name ? style.error : ""}
                                    />
                            {errors?.name && <p>{errors.name.message}</p>}
                            </label>

                            <label htmlFor="Phone Number">Phone Number
                            <Controller
                                name="phone"
                                control={control}
                                rules={{ required: true }}
                                render={({ field }) => (
                                <PhoneInput
                                    placeholder="Phone number"
                                    country={'es'}
                                    value={field.value}
                                    onChange={field.onChange}
                                    inputStyle={{ color: 'rgb(144, 163, 191)', background: '#F6F7F9', border: 'none', borderRadius: '10px', height: 'auto', width: '100%', lineHeight: '28px'}}
                                    buttonStyle={{border: 'none', borderRadius: '10px'}}
                                    containerStyle={{marginTop: '16px', borderRadius: '10px'}}
                                    className={errors.phone && style.formControlError}
                                />
                                )}
                            />
                            </label>
  
                            <label htmlFor="Adress">Adress
                                <input 
                                    type="text" 
                                    placeholder="Adress"
                                    id="adress" 
                                    {...register("adress", {
                                        required: true,
                                      })}
                                    onChange={handleNameChange}
                                    className={errors.adress ? style.error : ""}
                                />
                            </label>
                            <label htmlFor="Town/City">Town/City
                                <input 
                                    type="text" 
                                    placeholder="Town or city"
                                    id="city" 
                                    {...register("city", {
                                        required: true,
                                        pattern: /^[a-zA-Z\s]*$/,
                                      })}
                                    onChange={handleNameChange}
                                    className={errors.city ? style.error : ""}
                                />
                            </label>
                        </form>
                    </div>

                    <div className={style.rentalInfo}>
                        <h1>Rental Info</h1>
                        <p>Please select your rental date</p>
                        <p>Step 2 of 4</p>
                        <DatePanel reserveOpen={true}/>
                    </div>

                    <div className={style.rentalInfo}>
                        <h1>Payment Method</h1>
                        <p>Please enter your payment methode</p>
                        <p>Step 3 of 4</p>
                        <form className={style.infoForm} onSubmit={handleSubmit(onSubmit)}>
                            <label htmlFor="Card Number">Card Number
                            <input 
                                    type="number" 
                                    placeholder="Card Number"
                                    id="card" 
                                    {...register("card", {
                                        required: true,
                                        pattern:/^[0-9+-]+$/,
                                        minLength:16,
                                        maxLength: 16,
                                      })}
                                    onChange={handleNameChange}
                                    className={errors.card ? style.error : ""}
                                />
                            {errors.card?.type === 'minLength' && <p>Please enter a valid 16 digit Card number</p>}
                            {errors.card?.type === 'maxLength' && <p>Exceeded allowed number of characters</p>}
                            </label>
                            <label htmlFor="Expration Date">Expration Date
                                <input 
                                    type="text" 
                                    placeholder="Expration Date"
                                    id="date" 
                                    {...register("date", {
                                        required: true,
                                        pattern: {
                                            value: /^(0[1-9]|1[0-2])\/\d{2}$/,
                                            message: "Please enter a valid expiration date in the format MM/YY"
                                          },
                                      })}
                                    onChange={handleNameChange}
                                    className={errors.date ? style.error : ""}
                                />
                            {errors?.date && <p>{errors.date.message}</p>}
                            </label>
                            <label htmlFor="Card Holder">Card Holder
                                <input 
                                    type="text" 
                                    placeholder="Card Holder"
                                    id="holder"
                                    {...register("holder", {
                                        required: true,
                                        pattern: {
                                            value:  /^[a-zA-Z\s]*$/,
                                            message: 'Please enter valid name'
                                        },
                                      })}
                                      onChange={handleNameChange}
                                      className={errors.holder ? style.error : ""}
                                    />
                            {errors?.holder && <p>{errors.holder.message}</p>}
                            </label>
                            <label htmlFor="CVC">CVC
                            <input 
                                    type="number" 
                                    placeholder="CVC"
                                    id="cvc" 
                                    {...register("cvc", {
                                        required: true,
                                        pattern:/^[0-9+-]+$/,
                                        minLength:3,
                                        maxLength: 3,
                                      })}
                                    onChange={handleNameChange}
                                    className={errors.cvc ? style.error : ""}
                                />
                            {errors.cvc?.type === 'minLength' && <p>Please enter a valid 3 digit CVC number</p>}
                            {errors.cvc?.type === 'maxLength' && <p>Exceeded allowed number of characters</p>}
                            </label>
                        </form>
                    </div>

                    <div className={style.rentalInfo}>
                        <h1>Confirmation</h1>
                        <p>We are getting to the end. Just few clicks and your rental is ready!</p>
                        <p>Step 4 of 4</p>
                        <div className={style.confirmationInput}>
                            <label htmlFor="one">
                                <input type="checkbox" />
                                <span>I agree with sending an Marketing and newsletter emails. No spam, promissed!</span>
                            </label>
                            <label htmlFor="two">
                                <input type="checkbox" />
                                <span> I agree with our terms and conditions and privacy policy.</span>
                            </label>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <button type="submit" className={style.submitBtn}>Rent now</button>
                        </form>
                        {isSubmitted && <div className={style.noticeForm}>Form sent successfully!</div>}
                        
                        <div className={style.safeData}>
                            <img src={safe} alt="Safe data" />
                            <h1>All your data are safe</h1>
                            <p>We are using the most advanced security to provide you the best experience ever.</p>
                        </div>
                        </div>
                </div>


                <div className={style.rightBlock}>
                    <h1>Rental Summary</h1>
                    <p>Prices may change depending on the length of the rental and the price of your rental car.</p>
                    <h2>{reserve.name? reserve.name : 'Car not chosen'}</h2>
                    {reserve.image?  <img src={reserve.image} alt="Car for rent" /> : <div className={style.emptyImg}></div>}
                        <div className={style.allsubtotal}>
                            <div className={style.subtotal}>
                                <span>Subtotal</span>
                                <span>{reserve.price? reserve.price : 0}</span>
                            </div>
                            <div className={style.subtotal}>
                                <span>Tax</span>
                                <span>0</span>
                            </div>
                        </div>
                    <p>Get 5% enter "Promo2023"</p>
                    <form onSubmit={onApply} className={style.promoBlock}>
                        <input 
                            type="text" 
                            placeholder="Apply promo code" />
                        <button type="submit">Apply now</button>
                    </form>
                    <div className={style.totalBlock}>
                        <div>
                            <h3>Total Rental Price</h3>
                            <p>Overall price and includes rental discount</p>
                        </div>
                        <span>&#36;{reserve.price? amount : 0.00}</span>
                    </div>
                </div>
            </div>
            
       </div>
    )
}