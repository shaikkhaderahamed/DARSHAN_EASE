import { AuthLayout } from '@/components/layout/AuthLayout';
import { AuthCard } from '@/components/layout/AuthCard';
import { RegisterForm } from '@/features/auth/components/RegisterForm';

const Register = () => {
  return (
    <AuthLayout>
      <AuthCard 
        title="Create an Account" 
        subtitle="Join DarshanEase to book priority darshan"
      >
        <RegisterForm />
      </AuthCard>
    </AuthLayout>
  );
};

export default Register;
