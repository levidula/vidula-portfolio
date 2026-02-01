-- Create rate limiting table for contact form submissions
CREATE TABLE public.contact_form_rate_limits (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  ip_address TEXT NOT NULL,
  submitted_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create index for efficient lookups by IP and time
CREATE INDEX idx_contact_rate_limits_ip_time ON public.contact_form_rate_limits (ip_address, submitted_at);

-- Enable RLS
ALTER TABLE public.contact_form_rate_limits ENABLE ROW LEVEL SECURITY;

-- Create a cleanup function to remove old entries (older than 1 hour)
CREATE OR REPLACE FUNCTION public.cleanup_old_rate_limits()
RETURNS void AS $$
BEGIN
  DELETE FROM public.contact_form_rate_limits WHERE submitted_at < now() - interval '1 hour';
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Note: No SELECT/INSERT policies for public users - only service role can access this table