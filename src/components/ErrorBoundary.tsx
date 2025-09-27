import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Home, RefreshCw } from "lucide-react";
import { Component, ErrorInfo, ReactNode } from "react";
import { Link } from "react-router";
import { toast } from "sonner";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error to console for debugging
    console.error("Error caught by boundary:", error, errorInfo);

    // Update state with error details
    this.setState({
      error,
      errorInfo,
    });
    toast.error("Something went wrong");
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-background flex items-center justify-center p-4">
          <div className="relative max-w-md mx-auto">
            <Card className="p-8 shadow-xl border-0 bg-gradient-to-br from-card to-card/50">
              <CardHeader className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 text-red-600 rounded-full mb-6">
                  <AlertTriangle className="w-10 h-10" />
                </div>
                <CardTitle className="text-3xl font-black tracking-tight">
                  Oops! Something went wrong
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <p className="text-lg text-muted-foreground">
                  We encountered an unexpected error. Don't worry, our team has
                  been notified.
                </p>

                {process.env.NODE_ENV === "development" && this.state.error && (
                  <details className="text-left">
                    <summary className="cursor-pointer text-sm font-medium text-muted-foreground hover:text-foreground">
                      Error Details (Development)
                    </summary>
                    <div className="mt-2 p-3 bg-muted/50 rounded-lg text-xs font-mono overflow-auto">
                      <p className="text-red-600 font-semibold mb-2">
                        {this.state.error.name}: {this.state.error.message}
                      </p>
                      {this.state.errorInfo && (
                        <pre className="text-muted-foreground whitespace-pre-wrap">
                          {this.state.errorInfo.componentStack}
                        </pre>
                      )}
                    </div>
                  </details>
                )}

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={this.handleReload}
                    size="lg"
                    className="text-lg px-8 py-6"
                  >
                    <RefreshCw className="w-5 h-5 mr-2" />
                    Reload Page
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 py-6"
                  >
                    <Link to="/" className="flex items-center gap-2">
                      <Home className="w-5 h-5" />
                      Go Home
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
