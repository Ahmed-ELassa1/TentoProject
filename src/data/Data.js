import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import HomeIcon from "@mui/icons-material/Home";
import PublicSharpIcon from "@mui/icons-material/PublicSharp";
import WalletOutlinedIcon from "@mui/icons-material/WalletOutlined";
import PowerSettingsNewTwoToneIcon from "@mui/icons-material/PowerSettingsNewTwoTone";
import SettingsIcon from "@mui/icons-material/Settings";
import { Switch } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export const navData = [
  {
    url: "/",
    icon: HomeIcon,
  },
  {
    url: "/trade",
    icon: PublicSharpIcon,
  },
  {
    url: "/wallet",
    icon: WalletOutlinedIcon,
  },
  {
    url: "/settings-profile",
    icon: SettingsIcon,
  },
  {
    url: "/signin",
    icon: PowerSettingsNewTwoToneIcon,
  },
];
export const NotifData = [
  {
    icon: CheckIcon,
    heading: "Account created successfully",
    date: "2020-11-04 12:00:23",
    bgColor: "#36B37E",
  },
  {
    icon: ClearIcon,
    heading: "2FA verification failed",
    date: "2020-11-04 12:00:23",
    bgColor: "#FF5630",
  },
  {
    icon: CheckIcon,
    heading: "Device confirmation completed",
    date: "2020-11-04 12:00:23",
    bgColor: "#36B37E",
  },
  {
    icon: WarningAmberIcon,
    heading: "Phone Verification Pending",
    date: "2020-11-04 12:00:23",
    bgColor: "#FFAB00",
  },
];
export const Marks = [
  {
    icon : CheckIcon,
    iconColor: 'green',
    content: 'Verify account'
  },
  {
    icon : ClearIcon,
    iconColor: '#d65d5d',
    content: 'Two-factor Auth (2FA)'
  },
  {
    icon : ClearIcon,
    iconColor: '#d65d5d',
    content: 'Deposit money'
  },

]
export const AnalyticsDetail = [
  {
    title: "24hr Volume",
    from: "$236,3",
    to: "68.00",
  },
  {
    title: "Marketcap",
    from: "$236,3",
    to: "68.00",
  },
  {
    title: "24hr Volume",
    from: "$56,3",
    to: "BTC",
  },
  {
    title: "All Time High",
    from: "$236,3",
    to: "68.00",
  },
];
export const BalancesData = [
  {
    title: "Trade Balance",
    value: "$0.00",
    detail: "Total margin currency balance",
  },
  {
    title: "Equity",
    value: "$0.00",
    detail: "Trade balance combined with unrealized profit/loss",
  },
  {
    title: "Used Margin",
    value: "$0.00",
    detail: "Total margin amount used in open positions",
  },
  {
    title: "Free Margin",
    value: "$0.00",
    detail: "Usable margin balance. Equal to equity minus.",
  },
  {
    title: "Margin Level",
    value: "$0.00",
    detail: "Percentage ratio of equity to used margin.",
  },
];

export const WalletAddresses = [
  {
    name: "Bitcoin",
    value: "35Hb5B6qJa5ntYaNFN3hGYXdAjh919g2VH",
  },
  {
    name: "Bitcoin",
    value: "35Hb5B6qJa5ntYaNFN3hGYXdAjh919g2VH",
  },
  {
    name: "Bitcoin",
    value: "35Hb5B6qJa5ntYaNFN3hGYXdAjh919g2VH",
  },
  {
    name: "Bitcoin",
    value: "35Hb5B6qJa5ntYaNFN3hGYXdAjh919g2VH",
  },
];

export const Balance = [
  {
    asset: "Bitcoin",
    balance: 0,
    available: ">0",
    locked: 0,
    gain: "0.005%",
  },
  {
    asset: "Bitcoin",
    balance: 0,
    available: ">0",
    locked: 0,
    gain: "0.005%",
  },
  {
    asset: "Bitcoin",
    balance: 0,
    available: ">0",
    locked: 0,
    gain: "0.005%",
  },
  {
    asset: "Bitcoin",
    balance: 0,
    available: ">0",
    locked: 0,
    gain: "0.005%",
  },
  {
    asset: "Bitcoin",
    balance: 0,
    available: ">0",
    locked: 0,
    gain: "0.005%",
  },
];

export const Deposit = [
  {
    id: 12345,
    type: "Bitcoin",
    amount: 0,
    date: "Jan 01",
    hash: "#1236598745565",
    status: "Pending",
  },
  {
    id: 12345,
    type: "Bitcoin",
    amount: 0,
    date: "Jan 01",
    hash: "#1236598745565",
    status: "Pending",
  },
  {
    id: 12345,
    type: "Bitcoin",
    amount: 0,
    date: "Jan 01",
    hash: "#1236598745565",
    status: "Pending",
  },
  {
    id: 12345,
    type: "Bitcoin",
    amount: 0,
    date: "Jan 01",
    hash: "#1236598745565",
    status: "Pending",
  },
];

export const Withdrawals = [
  {
    id: 12345,
    type: "Bitcoin",
    amount: 0,
    fee: "0.02%	",
    date: "Jan 01",
    hash: "#1236598745565",
    status: "Pending",
  },
  {
    id: 12345,
    type: "Bitcoin",
    amount: 0,
    fee: "0.02%	",
    date: "Jan 01",
    hash: "#1236598745565",
    status: "Pending",
  },
  {
    id: 12345,
    type: "Bitcoin",
    amount: 0,
    fee: "0.02%	",
    date: "Jan 01",
    hash: "#1236598745565",
    status: "Pending",
  },
];

export const NormalUser = [
  {
    level: "Lv 1",
    total: "< 500",
    volume: "< 1000",
    fee: "< 0.100%",
    taker: "< 0.150%",
    limit: "500",
  },
  {
    level: "Lv 1",
    total: "< 500",
    volume: "< 1000",
    fee: "< 0.100%",
    taker: "< 0.150%",
    limit: "500",
  },
  {
    level: "Lv 1",
    total: "< 500",
    volume: "< 1000",
    fee: "< 0.100%",
    taker: "< 0.150%",
    limit: "500",
  },
  {
    level: "Lv 1",
    total: "< 500",
    volume: "< 1000",
    fee: "< 0.100%",
    taker: "< 0.150%",
    limit: "500",
  },
];

export const WebSessions = [
  {
    signed: "1 day ago",
    browser: "Chrome (Windows)",
    ip: "250.364.239.254",
    near: "Egypt, Cairo",
    correct: CheckIcon,
    fault: ClearIcon,
  },
  {
    signed: "1 day ago",
    browser: "Chrome (Windows)",
    ip: "250.364.239.254",
    near: "Egypt, Cairo",
    correct: CheckIcon,
    fault: ClearIcon,
  },
  {
    signed: "1 day ago",
    browser: "Chrome (Windows)",
    ip: "250.364.239.254",
    near: "Egypt, Cairo",
    correct: CheckIcon,
    fault: ClearIcon,
  },
];

export const AccountActivity = [
  {
    action: "verified second factor	",
    source: "api",
    ip: "157.119.239.254",
    location: "Mansoura",
    duration: "about 1 hour ago",
  },
  {
    action: "verified second factor	",
    source: "web",
    ip: "157.119.239.254",
    location: "Cairo",
    duration: "about 2 hours ago",
  },
  {
    action: "second factor failure",
    source: "api",
    ip: "157.119.239.254",
    location: "Giza",
    duration: "about 2 hours ago",
  },
  {
    action: "device confirmation completed",
    source: "web",
    ip: "157.119.239.254",
    location: "Mansoura",
    duration: "1 day ago",
  },
  {
    action: "signin",
    source: "api",
    ip: "157.119.239.254",
    location: "Mansoura",
    duration: "1 day ago",
  },
  {
    action: "verified second factor	",
    source: "web",
    ip: "157.119.239.254",
    location: "Banha",
    duration: " 1 day ago",
  },
  {
    action: "second factor failure",
    source: "web",
    ip: "157.119.239.254",
    location: "Mansoura",
    duration: "about 2 hours ago",
  },
  {
    action: "device confirmation completed",
    source: "api",
    ip: "157.119.239.254",
    location: "Giza",
    duration: "1 day ago",
  },
  {
    action: "signin",
    source: "api",
    ip: "157.119.239.254",
    location: "Mansoura",
    duration: "1 day ago",
  },
  {
    action: "verified second factor	",
    source: "web",
    ip: "157.119.239.254",
    location: "Mansoura",
    duration: " 1 day ago",
  },
];
// API KEYS
export const ApiKeys = [
  {
    key: "69e387f1-31c3-45ad-9c68-5a51e5e78b43",
    status: <Switch size="small" />,
    action: DeleteIcon,
  },
  {
    key: "69e387f1-31c3-45ad-9c68-5a51e5e78b43",
    status: <Switch size="small" />,
    action: DeleteIcon,
  },
  {
    key: "69e387f1-31c3-45ad-9c68-5a51e5e78b43",
    status: <Switch size="small" />,
    action: DeleteIcon,
  },
  {
    key: "69e387f1-31c3-45ad-9c68-5a51e5e78b43",
    status: <Switch size="small" />,
    action: DeleteIcon,
  },
  {
    key: "69e387f1-31c3-45ad-9c68-5a51e5e78b43",
    status: <Switch size="small" />,
    action: DeleteIcon,
  },
];

export const ConfirmationDetails = [
  {
    name: "Buyer Email",
    content: "buyer@example.com",
  },
  {
    name: "Seller Email",
    content: "seller@example.com",
  },
  {
    name: "Exchange Rate",
    content: "0.00212455 BTC",
  },
  {
    name: "Fee",
    content: "$28.00 USD",
  },
  {
    name: "Total",
    content: "$854.00 USD",
  },
  {
    name: "Vat",
    content: "$25.00 USD",
  },
  {
    name: "Sub Total",
    content: "$1232.00 USD",
  },
];
