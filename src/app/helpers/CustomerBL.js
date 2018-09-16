export const CustomerStatus = {
    PROSPECTIVE: 'PROSPECTIVE',
    CURRENT: 'CURRENT',
    NON_ACTIVE: 'NON_ACTIVE'
};

export function getCustomerStatusText(status) {
    const texts = {
        [CustomerStatus.PROSPECTIVE]: 'Prospective',
        [CustomerStatus.CURRENT]: 'Current',
        [CustomerStatus.NON_ACTIVE]: 'Non-active'
    };

    return texts[status] || 'All';
}