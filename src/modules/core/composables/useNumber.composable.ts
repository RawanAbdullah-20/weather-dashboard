const useNumberComposable = (): { formatNumber: (value?: number | string) => string, isNullable: (value: unknown) => boolean } => {
    const isNullable = (value: unknown): boolean => {
        return value === '' || value === null || value === undefined;
    }
    
    const formatNumber = (value?: number | string): string => {
        if (isNullable(value)) {
            return '0';
        }

        return Math.round(Number(value)).toLocaleString();
    };
    
    return {
        formatNumber,
        isNullable
    };
}

export default useNumberComposable;