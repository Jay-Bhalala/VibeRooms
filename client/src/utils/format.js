export const formatDate = (date) => {
    const d = new Date(date);
    return d.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
};

export const formatTime = (date) => {
    const d = new Date(date);
    return d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
};