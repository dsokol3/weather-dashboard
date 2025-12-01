/**
 * ErrorAlert Component
 * - Displays error messages in a styled alert box
 * - Used for API errors, validation errors, etc.
 */
import React from 'react';
import { AlertCircle, X } from 'lucide-react';
import { Card, CardContent } from './ui/Card';
import { Button } from './ui/Button';

const ErrorAlert = ({ message, onDismiss }) => {
  if (!message) return null;

  return (
    <Card className="bg-red-500/20 border-red-400/30 animate-slide-up">
      <CardContent className="p-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <AlertCircle className="h-5 w-5 text-red-300 flex-shrink-0" />
          <p className="text-red-100 text-sm">{message}</p>
        </div>
        {onDismiss && (
          <Button variant="ghost" size="icon" onClick={onDismiss} className="h-8 w-8">
            <X className="h-4 w-4 text-red-300" />
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default ErrorAlert;
