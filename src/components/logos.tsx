import genfeatLogo from "@/assets/logos/genfeat.png";
import microsoftLogo from "@/assets/logos/microsoft.png";
import copilotLogo from "@/assets/logos/copilot.png";
import fabricLogo from "@/assets/logos/fabric.png";
import klayytechLogo from "@/assets/logos/klayytech.png";

export function GenFeatMark({ className = "h-9" }: { className?: string }) {
  return <img src={genfeatLogo} alt="GenFeat" className={`${className} w-auto`} />;
}

export function MicrosoftMark({ className = "h-7" }: { className?: string }) {
  return <img src={microsoftLogo} alt="Microsoft" className={`${className} w-auto`} />;
}

export function CopilotMark({ className = "h-7" }: { className?: string }) {
  return <img src={copilotLogo} alt="Microsoft Copilot" className={`${className} w-auto`} />;
}

export function FabricMark({ className = "h-7" }: { className?: string }) {
  return <img src={fabricLogo} alt="Microsoft Fabric" className={`${className} w-auto`} />;
}

export function KlayytechMark({ className = "h-7" }: { className?: string }) {
  return <img src={klayytechLogo} alt="Klayytech" className={`${className} w-auto`} />;
}