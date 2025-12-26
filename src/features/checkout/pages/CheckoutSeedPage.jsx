import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CheckoutSeedPage() {
    const navigate = useNavigate();

    const [orderNumber, setOrderNumber] = useState("");

    const [products, setProducts] = useState("");
    const [shippingFee, setShippingFee] = useState("0");
    const [taxes, setTaxes] = useState("0");
    const [discount, setDiscount] = useState("0");

    const summary = useMemo(() => {
        const p = Number(products) || 0;
        const s = Number(shippingFee) || 0;
        const t = Number(taxes) || 0;
        const d = Number(discount) || 0;

        return {
            products: p,
            shippingFee: s,
            taxes: t,
            discount: d,
        };
    }, [products, shippingFee, taxes, discount]);

    const total = summary.products + summary.shippingFee + summary.taxes - summary.discount;

    const goToCheckout = () => {
        navigate("/checkout", {
            state: {
                summary,
                orderNumber,
            },
        });
    };

    return (
        <main className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
            <div className="w-full max-w-xl bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
                <h1 className="text-2xl font-bold text-slate-900">DEV · Seed Checkout</h1>
                <p className="mt-1 text-sm text-slate-600">
                    Pantalla temporal para probar. Luego la borras.
                </p>

                <div className="mt-6 grid grid-cols-1 gap-4">
                    <label className="block">
                        <span className="text-sm font-medium text-slate-900">Número de pedido</span>
                        <input
                            className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2"
                            value={orderNumber}
                            onChange={(e) => setOrderNumber(e.target.value)}
                            placeholder="987654"
                        />
                    </label>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <label className="block">
                            <span className="text-sm font-medium text-slate-900">Productos</span>
                            <input
                                className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2"
                                value={products}
                                onChange={(e) => setProducts(e.target.value)}
                                inputMode="decimal"
                            />
                        </label>

                        <label className="block">
                            <span className="text-sm font-medium text-slate-900">Envío y manejo</span>
                            <input
                                className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2"
                                value={shippingFee}
                                onChange={(e) => setShippingFee(e.target.value)}
                                inputMode="decimal"
                            />
                        </label>

                        <label className="block">
                            <span className="text-sm font-medium text-slate-900">Impuestos</span>
                            <input
                                className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2"
                                value={taxes}
                                onChange={(e) => setTaxes(e.target.value)}
                                inputMode="decimal"
                            />
                        </label>

                        <label className="block">
                            <span className="text-sm font-medium text-slate-900">Descuento</span>
                            <input
                                className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2"
                                value={discount}
                                onChange={(e) => setDiscount(e.target.value)}
                                inputMode="decimal"
                            />
                        </label>
                    </div>

                    <div className="rounded-xl bg-slate-50 border border-slate-200 p-4 flex justify-between">
                        <span className="text-slate-600">Total calculado:</span>
                        <span className="font-semibold text-slate-900">${total.toFixed(2)}</span>
                    </div>

                    <button
                        type="button"
                        onClick={goToCheckout}
                        className="w-full bg-primary hover:bg-primary-dark text-white font-bold px-6 py-3 rounded-xl transition-colors shadow-sm"
                    >
                        Ir al Checkout con estos datos
                    </button>
                </div>
            </div>
        </main>
    );
}