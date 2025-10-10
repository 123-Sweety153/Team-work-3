
import Cost from '@/components/ui/Cost'
import MonthlyExpenses from '@/components/ui/Monthly-expenses'
import Property from '@/components/ui/Property'
import Totally from '@/components/ui/Totally'
import React from 'react'

const LIsting = () => {
    const listing=[
  {
    "fee_name": "Property Transfer Tax",
    "cost": "$25,000",
    "description": "Based on the sale price and local regulations"
  },
  {
    "fee_name": "Legal Fees",
    "cost": "$3,000",
    "description": "Approximate cost for legal services, including title transfer"
  },
  {
    "fee_name": "Home Inspection",
    "cost": "$500",
    "description": "Recommended for due diligence"
  },
  {
    "fee_name": "Property Insurance",
    "cost": "$1,200",
    "description": "Annual cost for comprehensive property insurance"
  },
  {
    "fee_name": "Mortgage Fees",
    "cost": "Varies",
    "description": "if applicable, consult with your lender for specific details"
  }
]

  const monthly = [
        {
            "fee_name": "Property Taxes",
            "cost": "$1,250",
            "description": "Approximate monthly property tax based on the sale price and local rates"
        },
        {
            "fee_name": "Homeowners’ Association Fee",
            "cost": "$300",
            "description": "Monthly fee for common area maintenance and security"
        }
    ]

const Total =[
  {
    "fee_name": "Listing Price",
    "cost": "$1,250,000",
    "description": null
  },
  {
    "fee_name": "Additional Fees",
    "cost": "$29,700",
    "description": "Property transfer tax, legal fees, inspection, insurance"
  },
  {
    "fee_name": "Down Payment",
    "cost": "$250,000",
    "description": "20%"
  },
  {
    "fee_name": "Mortgage Amount",
    "cost": "$1,000,000",
    "description": "If applicable"
  }
]

const expenses = [
  {
    "fee_name": "Property Taxes",
    "cost": "$1,250"
  },
  {
    "fee_name": "Homeowners' Association Fee",
    "cost": "$300"
  },
  {
    "fee_name": "Mortgage Payment",
    "cost": "Varies based on terms and interest rate",
    "condition": "If applicable"
  },
  {
    "fee_name": "Property Insurance",
    "cost": "$100",
    "description": "Approximate monthly cost"
  }
]
  return (
    <Property>
        <div className='flex flex-col lg:flex-row gap-8 lg:justify-between'>
            <div className='lg:w-[220px] w-full mx-auto lg:pr-10'>
                <p className='text-gray-500 font-medium mb-2.5'>Listing Price</p>
                <h2 className='font-semibold xl:text-[40px] lg:text-[30px] md:text-[27px] text-[20px]'>$1,250,000</h2>
            </div>
            <div className='lg:w-[1326px] w-full mx-auto space-y-3 lg:pl-10 2xl:mt-18 xl:mt-16 lg:mt-14 '>
                <div className='flex flex-wrap items-center md:justify-between'>
                    <h2 className='xl:text-[24px] lg:text-[20px] md:text-[18px] font-semibold '>Additional Fees</h2>
                    <button className='text-white px-6 py-3 font-semibold cursor-pointer'>Learn more</button>

                </div>
                   <div className='2xl:space-y-20 space-y-16  grid grid-cols-1 lg:grid-cols-2'>
                        {listing.map((item,index)=>{
                            return <div key={index} className='space-y-2.5'>
                                <p className='text-[#999999] text-[14px] md:text-[16px] lg:text-[18px]'>{item.fee_name}</p>
                                <div className='flex flex-wrap gap-8'>
                                    <h3 className='font-semibold 2xl:text-[24px] xl:text-[22px] lg:text-[20px] text-[16px] '>{item.cost}</h3>
                                    <p className='text-[#999999] text-[14px] md:text-[16px] lg:text-[18px]'>{item.description}</p>
                                </div>
                            </div>
                        })}
                    </div>

                    <Cost monthly={monthly}/>
                    <Totally Total={Total}/>
                    <MonthlyExpenses expenses={expenses}/>
                
            </div>
        </div>
    </Property>
  )
}

export default LIsting