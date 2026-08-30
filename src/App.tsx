import {
  createEulerTheme,
  EULER_THEMES,
  EulerIconBitcoinBtc,
  EulerIconBitcoinConvert,
  EulerIconDollarCircle,
  EulerIconEmptyWallet,
  EulerIconNotification,
  EulerIconReceipt,
  EulerIconShop,
  EulerIconUserSquare,
  EulerSidebar,
  EulerSidebarItem,
  EulerSidebarRenderItemProps,
  EulerSwitchTheme,
} from '@eulertools/ui';
import { Box, ThemeProvider } from '@mui/material';
import React from 'react';

const SidebarItems = (props: EulerSidebarRenderItemProps) => {
  return (
    <>
      <EulerSidebarItem
        {...props}
        text="Tokens"
        IconOpen={EulerIconBitcoinBtc}
        IconClose={EulerIconBitcoinBtc}
        onClick={console.log}
        isSelected
      />
      <EulerSidebarItem
        {...props}
        text="Swap"
        IconOpen={EulerIconBitcoinConvert}
        IconClose={EulerIconBitcoinConvert}
        onClick={console.log}
      />
      <EulerSidebarItem
        {...props}
        text="Marketplace"
        IconOpen={EulerIconShop}
        IconClose={EulerIconShop}
        onClick={console.log}
      />
      <EulerSidebarItem
        {...props}
        text="Assets"
        IconOpen={EulerIconEmptyWallet}
        IconClose={EulerIconEmptyWallet}
        onClick={console.log}
      />
      <EulerSidebarItem
        {...props}
        text="Stacking"
        IconOpen={EulerIconDollarCircle}
        IconClose={EulerIconDollarCircle}
        onClick={console.log}
      />
    </>
  );
};

const SidebarBottomItems = (props: EulerSidebarRenderItemProps) => {
  return (
    <>
      <EulerSidebarItem
        {...props}
        text="Notifications"
        IconOpen={EulerIconNotification}
        IconClose={EulerIconNotification}
        onClick={console.log}
      />
      <EulerSidebarItem
        {...props}
        text="My profile"
        IconOpen={EulerIconUserSquare}
        IconClose={EulerIconUserSquare}
        onClick={console.log}
      />
      <EulerSidebarItem
        {...props}
        text="My trades"
        IconOpen={EulerIconReceipt}
        IconClose={EulerIconReceipt}
        onClick={console.log}
      />
    </>
  );
};

const Switch = (props: EulerSidebarRenderItemProps) => {
  const [theme, setTheme] = React.useState(EULER_THEMES.LIGHT);
  return (
    <EulerSwitchTheme
      theme={theme}
      onChange={(e: any, v: string) => setTheme(v)}
      onlyIcons={!props.isOpen}
    />
  );
};

export const App = () => {
  const storyTheme = createEulerTheme({ theme: 'light' });
  return (
    <ThemeProvider theme={storyTheme}>
      <Box height="100vh" display="grid" gridTemplateColumns="auto 1fr" gap={2}>
        <EulerSidebar
          renderItems={SidebarItems}
          renderBottomItems={SidebarBottomItems}
          renderBottomAddon={Switch}
        />
        <Box>Euler App sasaasasasasas</Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
