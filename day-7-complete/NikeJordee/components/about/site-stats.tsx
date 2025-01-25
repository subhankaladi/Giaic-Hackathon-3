import { Calendar, DollarSign, ShoppingBag, Wallet } from 'lucide-react'
import {inter, poppins} from "@/app/ui/font"


const stats = [
    {
        icon: Calendar,
        number: "10.5k",
        label: "Sellers active our site",
        highlight: false
    },
    {
        icon: DollarSign,
        number: "33k",
        label: "Monthly Produduct Sale",
        highlight: true
    },
    {
        icon: ShoppingBag,
        number: "45.5k",
        label: "Customer active in our site",
        highlight: false
    },
    {
        icon: Wallet,
        number: "25k",
        label: "Anual gross sale in our site",
        highlight: false
    }
]

export default function SiteStats() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {stats.map((stat, index) => (
                    <div 
                        key={index}
                        className={`relative p-8 flex flex-col items-center justify-center text-center border rounded-sm ${
                            stat.highlight ? 'bg-[#DB4444] text-white' : 'bg-white'
                        }`}
                    >
                        <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                            stat.highlight ? 'bg-white/20' : 'bg-black/10'
                        }`}>
                            <stat.icon className={`w-8 h-8 ${
                                stat.highlight ? 'text-white' : 'text-black'
                            }`} />
                        </div>
                        <div className={`text-[32px] font-semibold mb-1 ${inter.className}`}>{stat.number}</div>
                        <div className={`text-base ${poppins.className}`}>{stat.label}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

