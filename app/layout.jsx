import "./globals.css";

export const metadata = {
  title: "泡泡爪印宠物洗护店",
  description: "低压安抚洗护、皮毛分型护理、透明可见流程的宠物洗护预约页。"
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
