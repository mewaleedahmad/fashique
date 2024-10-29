import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { assets } from "../assets/images/assets.js";
import MainTitle from '../components/MainTitle';

const Checkout = () => {
  const shippingCharges = 300;
  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: ''
  });

  const notifyError = (message) => toast.error(message);

  const price = JSON.parse(localStorage.getItem("subTotal"));

  useEffect(() => {
    setSubTotal(price);
    setTotal(subTotal + shippingCharges);
  }, [price, subTotal]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isEmptyField = Object.values(formData).some((value) => value === '');

    if (isEmptyField) {
      notifyError("Please fill all input fields");
    } else {
      notifyError("Not Available in Demo");
    }
  };

  return (
        <form onSubmit={handleSubmit}>
    <section className='w-full flex lg:flex-row flex-col mt-10 lg:mt-14 layout'>
      <div className='w-full lg:w-1/2 lg:pt-14 pt-4'>
        <MainTitle title1="delivery" title2="information" className="capitalize" />
          <div className='flex flex-col gap-4 lg:pe-10 mt-10'>
            <div className='flex gap-3 flex-grow lg:w-5/6 w-full'>
              <input
                type="text"
                placeholder='First Name'
                name='firstname'
                className='form-style w-1/2'
                required
                value={formData.firstname}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder='Last Name'
                name='lastname'
                className='form-style w-1/2'
                required
                value={formData.lastname}
                onChange={handleChange}
              />
            </div>
            <input
              type="email"
              placeholder='Email'
              name='email'
              className='form-style lg:w-5/6 w-full'
              required
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder='Address'
              name='address'
              className='form-style lg:w-5/6 w-full'
              required
              value={formData.address}
              onChange={handleChange}
            />
            <div className='flex gap-3 items-center lg:w-5/6 w-full'>
              <input
                type="text"
                placeholder='City'
                name='city'
                className='form-style w-1/2'
                required
                value={formData.city}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder='State'
                name='state'
                className='form-style w-1/2'
                required
                value={formData.state}
                onChange={handleChange}
              />
            </div>
            <div className='flex gap-3 items-center lg:w-5/6 w-full'>
              <input
                type="text"
                placeholder='Zip code'
                name='zipcode'
                className='form-style w-1/2'
                required
                value={formData.zipcode}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder='Country'
                name='country'
                className='form-style w-1/2'
                required
                value={formData.country}
                onChange={handleChange}
              />
            </div>
            <input
              type="number"
              placeholder='Phone'
              name='phone'
              className='form-style lg:w-5/6 w-full'
              required
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
         
       
      </div>

      <div className='w-full lg:w-1/2'>
        <div className="w-full lg:px-8 flex flex-col gap-1">
          <div className="pb-10">
            <div className="border-b border-darkSecondary pb-6">
              <MainTitle title1="Cart" title2="Totals" className="py-10 capitalize" />
              <div className="flex justify-between items-center font-semibold">
                <p>Subtotal</p>
                <p>{subTotal}&nbsp;PKR</p>
              </div>
              <div className="flex justify-between items-center font-semibold">
                <p>Shipping</p>
                <p>{shippingCharges}&nbsp;PKR</p>
              </div>
            </div>
            <div className="flex justify-between items-center pt-4 font-extrabold text-red-800 text-lg">
              <p>Total</p>
              <p>{total}&nbsp;PKR</p>
            </div>
            <MainTitle title1="Payment" title2="method" className="py-10 capitalize" />
            <div className='flex gap-2 flex-grow w-full justify-evenly'>
              <button className='border border-darkSecondary px-2 w-full rounded-sm py-1 flex items-center gap-2'>
                <input type="radio" name='payment-method' className='radio radio-sm' required />
                <img src={assets.visa_logo} className='w-10' />
              </button>
              <button className='border border-darkSecondary px-2 w-full rounded-sm py-1 flex items-center gap-2'>
                <input type="radio" name='payment-method' className='radio radio-sm' required/>
                <img src={assets.googlepay_logo} className='w-10' />
              </button>
              <button className='uppercase text-darkPrimary border w-full border-darkSecondary px-2 rounded-sm py-1 flex items-center gap-1 lg:gap-2'>
                <input type="radio" name='payment-method' className='radio radio-sm' required />
                <p className='text-xs'>Cash on delivery</p>
              </button>
            </div>
            <button type="submit" className="btn btn-outline w-full mt-8 bg-darkPrimary text-lightPrimary text-[1rem] font-bold">
            Place Order
          </button>
          </div>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          theme="dark"
          />
      </div>
    </section>
          </form>
  );
}

export default Checkout;
