import React from 'react';
import { useForm } from 'react-hook-form';
import { WalletFormInputs } from '../interfaces/walletForm.interfaces';

export const Wallet: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, setValue,watch } = useForm<WalletFormInputs>({
    defaultValues: {
      full_name: '',
      email: '',
      address: '',
      city: '',
      country: '',
      state: '',
      zipcode: '',
      soda: 0,
      billing_same: false,
    }
  });

  const onSubmit = (data: WalletFormInputs) => {
    
  };
  const sodaValue = watch('soda', 0);
  return (
    <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <h2 className="font-semibold text-xl text-gray-600">Responsive Form</h2>
          <p className="text-gray-500 mb-6">Form is mobile responsive. Give it a try.</p>

          <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                <div className="text-gray-600">
                  <p className="font-medium text-lg">Personal Details</p>
                  <p>Please fill out all the fields.</p>
                </div>

                <div className="lg:col-span-2">
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    {/* Full Name */}
                    <div className="md:col-span-5">
                      <label htmlFor="full_name">Full Name</label>
                      <input
                        type="text"
                        id="full_name"
                        {...register('full_name', { required: 'Full name is required' })}
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      />
                      {errors.full_name && <p className="text-red-500 text-xs">{errors.full_name.message}</p>}
                    </div>

                    {/* Email */}
                    <div className="md:col-span-5">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        {...register('email', {
                          required: 'Email is required',
                          pattern: {
                            value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                            message: 'Enter a valid email',
                          }
                        })}
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      />
                      {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                    </div>

                    {/* Address */}
                    <div className="md:col-span-3">
                      <label htmlFor="address">Address / Street</label>
                      <input
                        type="text"
                        id="address"
                        {...register('address', { required: 'Address is required' })}
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      />
                      {errors.address && <p className="text-red-500 text-xs">{errors.address.message}</p>}
                    </div>

                    {/* City */}
                    <div className="md:col-span-2">
                      <label htmlFor="city">City</label>
                      <input
                        type="text"
                        id="city"
                        {...register('city', { required: 'City is required' })}
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      />
                      {errors.city && <p className="text-red-500 text-xs">{errors.city.message}</p>}
                    </div>

                    {/* Country */}
                    <div className="md:col-span-2">
                      <label htmlFor="country">Country / region</label>
                      <input
                        type="text"
                        id="country"
                        {...register('country', { required: 'Country is required' })}
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      />
                      {errors.country && <p className="text-red-500 text-xs">{errors.country.message}</p>}
                    </div>

                    {/* State */}
                    <div className="md:col-span-2">
                      <label htmlFor="state">State / province</label>
                      <input
                        type="text"
                        id="state"
                        {...register('state', { required: 'State is required' })}
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      />
                      {errors.state && <p className="text-red-500 text-xs">{errors.state.message}</p>}
                    </div>

                    {/* Zipcode */}
                    <div className="md:col-span-1">
                      <label htmlFor="zipcode">Zipcode</label>
                      <input
                        type="text"
                        id="zipcode"
                        {...register('zipcode', { required: 'Zipcode is required' })}
                        className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      />
                      {errors.zipcode && <p className="text-red-500 text-xs">{errors.zipcode.message}</p>}
                    </div>

                    {/* Billing Same */}
                    <div className="md:col-span-5">
                      <div className="inline-flex items-center">
                        <input
                          type="checkbox"
                          id="billing_same"
                          {...register('billing_same')}
                          className="form-checkbox"
                        />
                        <label htmlFor="billing_same" className="ml-2">
                          My billing address is different than above.
                        </label>
                      </div>
                    </div>

                    {/* Soda */}
                    <div className="md:col-span-2">
                      <label htmlFor="soda">How many soda pops?</label>
                      <div className="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                        <button
                          type="button"
                          onClick={() => setValue('soda', sodaValue - 1)}
                          className="cursor-pointer outline-none focus:outline-none border-r border-gray-200 transition-all text-gray-500 hover:text-blue-600"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mx-2" viewBox="0 0 20 20" fill="currentColor">
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                        <input
                          name="soda"
                          id="soda"
                          placeholder="0"
                          className="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
                          value={sodaValue}
                          readOnly
                        />
                        <button
                          type="button"
                          onClick={() => setValue('soda', sodaValue + 1)}
                          className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-500 hover:text-blue-600"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mx-2 fill-current" viewBox="0 0 20 20" fill="currentColor">
                            <path
                              fillRule="evenodd"
                              d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="md:col-span-5 text-right">
                      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

