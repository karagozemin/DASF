// Optionally, define your own ReportHandler type
type ReportHandler = (metric: any) => void;

const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    import('web-vitals').then((module) => {
      // Cast the default export to any to access its functions without type errors.
      const vitals = module.default as any;
      vitals.getCLS(onPerfEntry);
      vitals.getFID(onPerfEntry);
      vitals.getFCP(onPerfEntry);
      vitals.getLCP(onPerfEntry);
      vitals.getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
