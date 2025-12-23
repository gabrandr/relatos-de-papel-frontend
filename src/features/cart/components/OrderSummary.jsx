
import React, { useState } from 'react'
import { useCart } from '../../../hooks/useCart'

export default function OrderSummary() {
  const { getCartTotal, applyCoupon, discount } = useCart()
  const { subtotal, discountAmount, total } = getCartTotal()
  const [couponCode, setCouponCode] = useState('')
  const [couponMessage, setCouponMessage] = useState('')

  const handleApplyCoupon = () => {
    if (!couponCode.trim()) return
    
    const applied = applyCoupon(couponCode)
    if (applied) {
      setCouponMessage('¡Cupón aplicado correctamente!')
    } else {
      setCouponMessage('Cupón no válido')
    }
  }

  return (
    <div className="bg-gray-200 p-6 rounded-lg shadow-sm h-fit">
        {/* Sección Cupón */}
        <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Cupón de Descuento</label>
            <div className="flex gap-2">
                <input 
                    type="text" 
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Código"
                />
                <button 
                    onClick={handleApplyCoupon}
                    className="bg-blue-500 text-white px-4 py-2 rounded font-medium hover:bg-blue-600 transition"
                >
                    Aplicar
                </button>
            </div>
            {couponMessage && (
                <p className={`text-sm mt-2 ${couponMessage.includes('correctamente') ? 'text-green-600' : 'text-red-500'}`}>
                    {couponMessage}
                </p>
            )}
        </div>

        <hr className="border-gray-300 mb-4"/>

         {/* Resumen Financiero */}
        <div className="space-y-2 mb-4 text-gray-800">
            <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
                <span>Descuento {discount > 0 && `(${discount}%)`}</span>
                <span>${discountAmount.toFixed(2)}</span>
            </div>
        </div>

        <div className="flex justify-between font-bold text-lg mb-6 border-t border-gray-300 pt-4">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
        </div>

        <button className="w-full bg-blue-500 text-white py-3 rounded-lg font-bold hover:bg-blue-600 transition uppercase tracking-wide">
            Proceder al Pago
        </button>
    </div>
  )
}
