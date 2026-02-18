
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ErrorBoundaryState {
    hasError: boolean;
    error: Error | null;
}

class ErrorBoundary extends React.Component<React.PropsWithChildren<object>, ErrorBoundaryState> {
    state: ErrorBoundaryState = { hasError: false, error: null };

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, info: React.ErrorInfo) {
        // In production you'd send this to an error tracking service
        console.error('[ErrorBoundary]', error, info.componentStack);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-white flex flex-col items-center justify-center text-center px-8">
                    <div className="max-w-lg space-y-8">
                        <div className="space-y-2">
                            <span className="text-[10px] font-[800] uppercase tracking-[0.4em] text-[#F39A31]">Something went wrong</span>
                            <h1 className="text-6xl font-[900] tracking-tighter text-[#333333] leading-none">
                                Unexpected Error
                            </h1>
                            <p className="text-lg text-[#333333]/60 font-[500] leading-relaxed">
                                We're sorry — something broke on our end. Please try refreshing the page.
                            </p>
                        </div>
                        <button
                            onClick={() => window.location.reload()}
                            className="inline-flex items-center gap-3 bg-[#1E5F74] text-white px-10 py-5 rounded-full font-[800] text-[12px] uppercase tracking-[0.2em] hover:bg-[#F39A31] hover:text-[#333333] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 group"
                        >
                            Refresh Page
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
