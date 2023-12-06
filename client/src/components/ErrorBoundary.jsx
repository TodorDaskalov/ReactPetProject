import { Component } from "react";
import NotFoundPage from "./notFoundPage";

export default class ErrorBoundary extends Component {
    constructor() {
        super()

        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(err) {
        return {
            hasError: true,
        }
    }

    componentDidCatch(error, errorInfo) {
        console.log(error);
        console.log(errorInfo);
    }

    render() {

        if (this.state.hasError) {
            return <NotFoundPage />
        }

        return this.props.children;
    }
}