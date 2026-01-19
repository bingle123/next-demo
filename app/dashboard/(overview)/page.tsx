import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
// import { 
//   // fetchRevenue,
//   // fetchLatestInvoices,
//   fetchCardData
// } from '@/app/lib/data';
import TimeDisplay from '@/app/components/TimeDisplay'; // 导入客户端组件
import { Button } from "@/components/ui/button"

import { Suspense } from 'react';
import { 
  RevenueChartSkeleton,
  LatestInvoicesSkeleton,
  CardsSkeleton
} from '@/app/ui/skeletons';
import { CardWrapper } from '@/app/ui/dashboard/cards';

export default async function Page() {
  // const revenue = await fetchRevenue();
  // const latestInvoices = await fetchLatestInvoices();

  // const {
  //   numberOfInvoices,
  //   numberOfCustomers,
  //   totalPaidInvoices,
  //   totalPendingInvoices,
  // } = await fetchCardData();
  
  // 这是服务端逻辑哦， 后台在刷log，前端无变化。
  let now = Date.now()
  // console.log("now",now)
  // setInterval(()=>{
  //   now = Date.now()
  //   console.log("now",now)
  // }, 5000)
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div>
        <p>构建时间: {Date.now()}</p>
        <p>请求时间: {now}</p>
      </div>
      <Button>Click me</Button>
      <TimeDisplay />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
         <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense> 
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices/> 
        </Suspense> 
      </div>
    </main>
  );
}