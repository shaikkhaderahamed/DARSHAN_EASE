import { AuthLayout } from '@/components/layout/AuthLayout';
import { AuthCard } from '@/components/layout/AuthCard';
import { LoginForm } from '@/features/auth/components/LoginForm';

const Login = () => {
  return (
    <AuthLayout>
      <AuthCard 
        title="Welcome Back" 
        subtitle="Sign in to your DarshanEase account"
      >
        <LoginForm />
      </AuthCard>
    </AuthLayout>
  );
};

export default Login;
