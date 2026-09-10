import { useState } from "react";

const COUNTRIES: { code: string; dial: string; name: string }[] = [
  { code: "AE", dial: "+971", name: "United Arab Emirates" },
  { code: "SA", dial: "+966", name: "Saudi Arabia" },
  { code: "QA", dial: "+974", name: "Qatar" },
  { code: "OM", dial: "+968", name: "Oman" },
  { code: "BH", dial: "+973", name: "Bahrain" },
  { code: "KW", dial: "+965", name: "Kuwait" },
  { code: "IN", dial: "+91", name: "India" },
  { code: "PK", dial: "+92", name: "Pakistan" },
  { code: "BD", dial: "+880", name: "Bangladesh" },
  { code: "PH", dial: "+63", name: "Philippines" },
  { code: "EG", dial: "+20", name: "Egypt" },
  { code: "JO", dial: "+962", name: "Jordan" },
  { code: "LB", dial: "+961", name: "Lebanon" },
  { code: "TR", dial: "+90", name: "Turkey" },
  { code: "GB", dial: "+44", name: "United Kingdom" },
  { code: "US", dial: "+1", name: "United States" },
  { code: "CA", dial: "+1", name: "Canada" },
  { code: "DE", dial: "+49", name: "Germany" },
  { code: "FR", dial: "+33", name: "France" },
  { code: "IT", dial: "+39", name: "Italy" },
  { code: "ES", dial: "+34", name: "Spain" },
  { code: "NL", dial: "+31", name: "Netherlands" },
  { code: "CH", dial: "+41", name: "Switzerland" },
  { code: "SE", dial: "+46", name: "Sweden" },
  { code: "NO", dial: "+47", name: "Norway" },
  { code: "AU", dial: "+61", name: "Australia" },
  { code: "NZ", dial: "+64", name: "New Zealand" },
  { code: "JP", dial: "+81", name: "Japan" },
  { code: "KR", dial: "+82", name: "South Korea" },
  { code: "CN", dial: "+86", name: "China" },
  { code: "SG", dial: "+65", name: "Singapore" },
  { code: "MY", dial: "+60", name: "Malaysia" },
  { code: "ID", dial: "+62", name: "Indonesia" },
  { code: "TH", dial: "+66", name: "Thailand" },
  { code: "ZA", dial: "+27", name: "South Africa" },
  { code: "NG", dial: "+234", name: "Nigeria" },
  { code: "KE", dial: "+254", name: "Kenya" },
  { code: "BR", dial: "+55", name: "Brazil" },
  { code: "MX", dial: "+52", name: "Mexico" },
  { code: "RU", dial: "+7", name: "Russia" },
];

type Props = {
  name?: string;
  defaultDial?: string;
  required?: boolean;
  maxLength?: number;
  placeholder?: string;
};

export function PhoneInput({ name = "phone", defaultDial = "+971", required, maxLength = 40, placeholder = "58 877 6556" }: Props) {
  const [dial, setDial] = useState(defaultDial);
  const [number, setNumber] = useState("");

  return (
    <div className="phone-input-wrap">
      <select
        className="phone-dial"
        value={dial}
        onChange={(e) => setDial(e.target.value)}
        aria-label="Country code"
      >
        {COUNTRIES.map((c) => (
          <option key={c.code} value={c.dial}>
            {c.dial}  ({c.name})
          </option>
        ))}
      </select>
      <input
        type="tel"
        className="phone-number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        required={required}
        maxLength={maxLength}
        placeholder={placeholder}
        aria-label="Phone number"
      />
      {/* Combined value submitted with form */}
      <input type="hidden" name={name} value={number ? `${dial} ${number}` : ""} />
    </div>
  );
}
