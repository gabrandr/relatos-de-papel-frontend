import { useEffect, useRef, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function CheckoutSuccessPage() {


    const navigate = useNavigate();
    const [isDownloading, setIsDownloading] = useState(false);


    // obtener el ticket de exito de compra desde el sessionStorage
    const [ticket] = useState(() => {
        try {
            const raw = sessionStorage.getItem("checkout_success_ticket");
            return raw ? JSON.parse(raw) : null;
        } catch {
            return null;
        }
    });

    if (!ticket || ticket.used) {
        return <Navigate to="/" replace />;
    }

    const orderNumber = ticket.orderNumber ?? "—";

    const PDF_URL =
        "https://library.oapen.org/bitstream/20.500.12657/109359/1/9781040568132.pdf";

    const markedRef = useRef(false);

    // marcar el ticket como usado para que no se pueda volver a esta pagina
    useEffect(() => {
        if (markedRef.current) return;
        markedRef.current = true;

        sessionStorage.setItem(
            "checkout_success_ticket",
            JSON.stringify({ ...ticket, used: true })
        );
    }, [ticket]);

    // manejar el boton de volver a la tienda
    const handleBackToShop = () => {
        sessionStorage.removeItem("checkout_success_ticket");
        navigate("/", { replace: true });
    };

    const downloadingRef = useRef(false);


    // manejar la descarga del ebook
    const handleDownload = () => {
        if (isDownloading) return;

        setIsDownloading(true);


        const a = document.createElement("a");
        a.href = PDF_URL;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        document.body.appendChild(a);
        a.click();
        a.remove();

        // simular tiempo de descarga
        setTimeout(() => {
            setIsDownloading(false);
        }, 600);
    };
    return (
        <main className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-10 max-w-lg w-full text-center">
                <div className="relative mx-auto h-20 w-20 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                    <span className="material-symbols-outlined text-[42px] leading-none">
                        check
                    </span>
                    <span className="absolute inset-0 rounded-full ring-8 ring-emerald-500/15" />
                </div>

                <h1 className="mt-6 text-3xl font-bold text-slate-900">
                    ¡Gracias por tu compra!
                </h1>

                <p className="mt-2 text-slate-600">
                    Número de pedido: <strong>#{orderNumber}</strong>
                </p>

                <button
                    type="button"
                    onClick={handleDownload}
                    disabled={isDownloading}
                    className={[
                        "mt-6 w-full inline-flex items-center justify-center gap-2 font-bold py-3 rounded-xl transition",
                        "bg-primary text-white shadow-sm hover:bg-primary-dark",
                        "active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-primary/25",
                        isDownloading ? "opacity-90 ring-4 ring-primary/25" : "",
                    ].join(" ")}
                >
                    <span
                        className={[
                            "material-symbols-outlined text-[22px] leading-none",
                            isDownloading ? "animate-spin" : ""
                        ].join(" ")}
                    >
                        {isDownloading ? "progress_activity" : "download"}
                    </span>
                    {isDownloading ? "Iniciando descarga..." : "Descargar E-book Ahora"}
                </button>

                <button
                    type="button"
                    onClick={handleBackToShop}
                    className="mt-3 w-full text-slate-600 hover:underline"
                >
                    Volver a la tienda
                </button>
            </div>
        </main>
    );
}