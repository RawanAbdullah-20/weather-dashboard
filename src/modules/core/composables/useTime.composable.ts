interface ITimeComposable {
  useDateTime: (
    dateValue: string | Date | undefined | null,
    timeZone?: string,
    options?: Intl.DateTimeFormatOptions
  ) => string;
  useTimeFormat: (
    dateValue: string | Date | undefined | null,
    timeZone?: string,
    options?: Intl.DateTimeFormatOptions
  ) => string;
}

const useTimeComposable = (): ITimeComposable => {
  const useDateTime = (
    dateValue: string | Date | undefined | null,
    timeZone?: string,
    options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      day: 'numeric',
      month: 'short',
    }
  ): string => {
    if (!dateValue) {
      return '';
    }
    const date = new Date(dateValue);
    return date.toLocaleDateString('en-US', {
      ...options,
      timeZone,
    });
  };

  const useTimeFormat = (
    dateValue: string | Date | undefined | null,
    timeZone?: string,
    options: Intl.DateTimeFormatOptions = {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    }
  ): string => {
    if (!dateValue) {
      return '';
    }
    const date = new Date(dateValue);
    return date.toLocaleTimeString('en-US', {
      ...options,
      timeZone,
    });
  };

  return {
    useDateTime,
    useTimeFormat,
  };
};

export default useTimeComposable;