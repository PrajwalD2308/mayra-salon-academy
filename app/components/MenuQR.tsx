"use client";

import { QRCodeCanvas } from "qrcode.react";
import Link from "next/link";

export default function MenuQR() {
  return (
    <div className="hidden md:block bg-white/5 rounded-xl p-4 text-center border border-white/10">
      <p className="text-sm font-medium mb-2">📱 Scan Menu</p>

      <div className="flex justify-center mb-2">
        <QRCodeCanvas
          value="https://mayraunisexsalon.com/menu"
          size={110}
          fgColor="#7c3aed"
          bgColor="#ffffff"
          level="H"
        />
      </div>

      <p className="text-xs text-gray-400">No app required</p>
    </div>
  );
}
