"use client";

import { QRCodeCanvas } from "qrcode.react";
import Image from "next/image";

export default function MenuQRPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10 px-4">
      <div className="bg-white rounded-3xl shadow-2xl px-6 py-8 w-full max-w-sm text-center">
        {/* LOGO */}
        <div className="flex flex-col items-center mb-6">
          <Image
            src="/images/Mayra_Logo.png" // ✅ FIXED PATH
            alt="Mayra Unisex Salon"
            width={96}
            height={96}
            className="mb-3 object-contain"
            priority
          />

          <h1 className="text-lg font-bold text-primary">Mayra Unisex Salon</h1>

          <p className="text-xs text-gray-500 mt-1">
            Scan to View Service Menu
          </p>
        </div>

        {/* QR CODE */}
        <div className="flex justify-center mb-6">
          <QRCodeCanvas
            value="https://mayraunisexsalon.com/menu"
            size={240} // 📱 mobile-friendly size
            bgColor="#ffffff"
            fgColor="#740f5f" // ✅ brand color
            level="H"
          />
        </div>

        {/* FOOTER TEXT */}
        <div className="space-y-1">
          <p className="text-sm font-semibold text-gray-700">No App Required</p>
          <p className="text-xs text-gray-500">Updated prices • Easy booking</p>
        </div>
      </div>
    </div>
  );
}
