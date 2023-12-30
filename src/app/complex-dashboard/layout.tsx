import Users from './users/page';
import RevenueComponent from './@revenue/page';
import Notification from './@notifications/page';

export default function ComplexDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>{children}</h1>
      <div style={{ display: 'flex' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div>
            <Users />
          </div>
          <div>
            <RevenueComponent />
          </div>
        </div>
        <div style={{ display: 'flex', flex: 1 }}>
          <Notification />
        </div>
      </div>
    </div>
  );
}
