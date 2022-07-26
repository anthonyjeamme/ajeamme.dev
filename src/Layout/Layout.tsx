import { generateCSSVariables } from "./Layout.utils";

import styles from "./Layout.module.scss";

interface TLayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<TLayoutProps> = ({ children }) => {
  const colors = {
    dark: "#272740", // 262d4d
    light: "#ecf0f8",
    primary: "#5d6bbb",
  };

  return (
    <div
      style={{
        ...generateCSSVariables(colors),
      }}
    >
      <div className={styles["Layout"]}>{children}</div>
    </div>
  );
};

export default Layout;
