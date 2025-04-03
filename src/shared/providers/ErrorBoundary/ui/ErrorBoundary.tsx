import { ErrorView } from '@widgets';
import React, { ErrorInfo, ReactNode } from 'react';

interface Props {
    children: ReactNode;
}
interface State {
    hasError: boolean;
    error: Error | null;
    errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null,
        };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        this.setState((prevState) => ({ ...prevState, error, errorInfo }));
    }

    render() {
        if (this.state.hasError) {
            return (
                <ErrorView error={this.state.error} errorInfo={this.state.errorInfo}/>
            );
        }

        return this.props.children;
    }
}
