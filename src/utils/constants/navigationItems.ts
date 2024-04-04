import { INavigationCard } from "../../types/components";

export const profileNavigation: INavigationCard[] = [
    {
        icon: 'money-check-alt',
        text: 'Deposit',
        navigateTo: 'DepositScreen',
    },
    {
        icon: 'archive',
        text: 'Payment archive',
        navigateTo: 'PaymentArchiveScreen',
    },
    {
        icon: 'credit-card',
        text: 'My bank cards',
        navigateTo: 'MyBankCardsScreen',
    },
    {
        icon: 'car',
        text: 'My electronic devices',
        navigateTo: 'MyElectronicDevicesScreen',
    },
    {
        icon: 'info-circle',
        text: 'Personal info',
        navigateTo: 'PersonalInfoScreen',
    },
    {
        icon: 'sign-out-alt',
        text: 'Logout',
        navigateTo: 'LoginScreen',
    },
]

export const menuNavigation: INavigationCard[] = [
    {
        icon: 'money-check-alt',
        text: 'Favourite',
        navigateTo: 'FavouriteScreen',
    },
    {
        icon: 'archive',
        text: 'Nearest stations',
        navigateTo: 'NearestStationsScreen',
    },
    {
        icon: 'credit-card',
        text: 'Active Sessions',
        navigateTo: 'ActiveSessionsScreen',
    },
    {
        icon: 'car',
        text: 'History / Statistic',
        navigateTo: 'HistoryStatisticScreen',
    },
    {
        icon: 'info-circle',
        text: 'QR Code Scanner',
        navigateTo: 'QRCodeScannerScreen',
    },
]