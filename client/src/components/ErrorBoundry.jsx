import { Component } from 'react';

export default class ErrorBoundary extends Component {
    constructor() {
        super()

        this.state = {
            hasError: false,
        }
    }
    
    static getDerivedStateFromError(err) {
        return {
            hasError: true,
        }
    }

    componentDidCatch(error, errorInfo) {
    }
    render() {
        if (this.state.hasError) {
            return (<div>
            <h2 style={{ paddingTop: '300px',  fontSize: '50px' }}>404</h2>
            <h2>This page doesnt exists</h2>
        </div>)
        }
        return this.props.children;
    }
}
