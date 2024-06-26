import * as React from 'react';
import { Line } from "react-chartjs-2";
import Chart from 'chart.js/auto';
import { Bar } from "react-chartjs-2";

const MyDashboard = () => {

    const labels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const data = {
        labels: labels,
        datasets: [
            {
                label: "Workout Statistic",
                backgroundColor: "rgb(255, 99, 132)",
                borderColor: "rgb(255, 99, 132)",
                data: [0, 10, 5, 2, 12, 15, 20, 23, 34, 30, 45, 51],
            },
        ],
    };

    const labels1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
    const data1 = {
        labels: labels1,
        datasets: [
            {
                label: "Calories Chart",
                backgroundColor: "#6CC51D",
                borderColor: "#6CC51D",
                data: [-80, , -60, -20, -10, -5, 0, 10, 15, 20, 30, 40, 50, 40, 60, 35, 25, 60, 80],
            },
        ],
    };

    return (
        <div className='p-10 flex flex-col gap-4'>
            <div className='flex flex-row gap-2 flex-wrap justify-between items-center p-4'>
                <div className='bg-white min-w-[180px] flex flex-col items-center p-4 rounded-xl'>
                    <div className="inline-block mb-4 ms[-12] relative donut-chart-sale">
                        <span className="donut1" data-peity="{ &quot;fill&quot;: [&quot;rgb(192, 255, 134)&quot;, &quot;rgba(255, 255, 255, 1)&quot;],   &quot;innerRadius&quot;: 45, &quot;radius&quot;: 10}" style={{ display: 'none' }}>4/8</span>
                        <svg className="peity" height="110" width="110">
                            <path d="M 55 0 A 55 55 0 0 1 55 110 L 55 100 A 45 45 0 0 0 55 10" data-value="4" fill="rgb(192, 255, 134)"></path>
                            <path d="M 55 110 A 55 55 0 0 1 54.99999999999999 0 L 54.99999999999999 10 A 45 45 0 0 0 55 100" data-value="4" fill="rgba(255, 255, 255, 1)"></path>
                        </svg>
                        <small className="text-primary">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M39.9353 18.3544C39.8731 18.1666 38.3337 13.75 32.5 13.75C25.9703 13.75 22.8666 17.9659 21.795 19.8719C20.6306 19.1822 19.1838 18.75 17.5 18.75C15.7922 18.75 14.35 19.1375 13.1275 19.7072C13.5697 16.695 13.6987 13.1119 13.7353 11.25H17.5C17.9175 11.25 18.3081 11.0413 18.54 10.6934L21.04 6.94344C21.4075 6.39156 21.2806 5.64813 20.7494 5.25031C18.3166 3.42531 15.1269 1.25 13.75 1.25C11.6137 1.25 6.95688 6.24344 5.16469 9.38C0.0584378 18.3153 0 31.925 0 32.5C0 32.8797 0.172188 33.2391 0.46875 33.4759C7.56469 39.1522 15.7519 40 20 40C23.3716 40 29.9756 39.4391 36.3306 35.6834C38.5938 34.3456 40 31.8706 40 29.2244V18.75C40 18.6156 39.9781 18.4822 39.9353 18.3544ZM37.5 29.2244C37.5 30.9912 36.565 32.6419 35.0584 33.5316C29.2162 36.9844 23.1166 37.5 20 37.5C16.9178 37.5 9.15156 36.9453 2.51094 31.8981C2.58406 29.19 3.14094 17.96 7.33531 10.62C9.09187 7.54813 12.7112 4.16312 13.7722 3.76562C14.4606 3.96406 16.4566 5.23219 18.2972 6.55125L16.8309 8.75H12.5C11.8091 8.75 11.25 9.30969 11.25 10C11.25 10.0822 11.2344 17.9659 10.185 21.6878C9.46375 22.3391 8.88656 22.9872 8.43125 23.4994C8.2175 23.7403 8.02969 23.9522 7.86594 24.1166C7.3775 24.605 7.3775 25.3959 7.86594 25.8841C8.35437 26.3722 9.14531 26.3725 9.63344 25.8841C9.82625 25.6913 10.0472 25.4441 10.3 25.1603C11.6003 23.6975 13.7756 21.25 17.5 21.25C20.5884 21.25 22.5 23.1966 22.5 25C22.5 25.6903 23.0591 26.25 23.75 26.25C24.4409 26.25 25 25.6903 25 25C25 23.8181 24.5506 22.6022 23.7313 21.5581C24.1503 20.66 26.5119 16.25 32.5 16.25C35.99 16.25 37.2228 18.39 37.5 18.9922V29.2244Z" fill="white"></path>
                            </svg>
                        </small>
                        <span className="circle bg-primary"></span>
                        <p className='absolute top-10 left-9 text-darkpink text-xl'>Body</p>
                    </div>
                    <h2 className='text-3xl font-medium'>48%</h2>
                    <p className=''>Weekly Progress</p>
                </div>

                <div className='bg-white min-w-[180px] flex flex-col items-center p-4 rounded-xl'>
                    <div className="inline-block mb-4 ms[-12] relative donut-chart-sale">
                        <span className="donut1" data-peity="{ &quot;fill&quot;: [&quot;rgb(192, 255, 134)&quot;, &quot;rgba(255, 255, 255, 1)&quot;],   &quot;innerRadius&quot;: 45, &quot;radius&quot;: 10}" style={{ display: 'none' }}>4/8</span>
                        <svg className="peity" height="110" width="110">
                            <path d="M 55 0 A 55 55 0 0 1 55 110 L 55 100 A 45 45 0 0 0 55 10" data-value="4" fill="rgb(192, 255, 134)"></path>
                            <path d="M 55 110 A 55 55 0 0 1 54.99999999999999 0 L 54.99999999999999 10 A 45 45 0 0 0 55 100" data-value="4" fill="rgba(255, 255, 255, 1)"></path>
                        </svg>
                        <small className="text-primary">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M39.9353 18.3544C39.8731 18.1666 38.3337 13.75 32.5 13.75C25.9703 13.75 22.8666 17.9659 21.795 19.8719C20.6306 19.1822 19.1838 18.75 17.5 18.75C15.7922 18.75 14.35 19.1375 13.1275 19.7072C13.5697 16.695 13.6987 13.1119 13.7353 11.25H17.5C17.9175 11.25 18.3081 11.0413 18.54 10.6934L21.04 6.94344C21.4075 6.39156 21.2806 5.64813 20.7494 5.25031C18.3166 3.42531 15.1269 1.25 13.75 1.25C11.6137 1.25 6.95688 6.24344 5.16469 9.38C0.0584378 18.3153 0 31.925 0 32.5C0 32.8797 0.172188 33.2391 0.46875 33.4759C7.56469 39.1522 15.7519 40 20 40C23.3716 40 29.9756 39.4391 36.3306 35.6834C38.5938 34.3456 40 31.8706 40 29.2244V18.75C40 18.6156 39.9781 18.4822 39.9353 18.3544ZM37.5 29.2244C37.5 30.9912 36.565 32.6419 35.0584 33.5316C29.2162 36.9844 23.1166 37.5 20 37.5C16.9178 37.5 9.15156 36.9453 2.51094 31.8981C2.58406 29.19 3.14094 17.96 7.33531 10.62C9.09187 7.54813 12.7112 4.16312 13.7722 3.76562C14.4606 3.96406 16.4566 5.23219 18.2972 6.55125L16.8309 8.75H12.5C11.8091 8.75 11.25 9.30969 11.25 10C11.25 10.0822 11.2344 17.9659 10.185 21.6878C9.46375 22.3391 8.88656 22.9872 8.43125 23.4994C8.2175 23.7403 8.02969 23.9522 7.86594 24.1166C7.3775 24.605 7.3775 25.3959 7.86594 25.8841C8.35437 26.3722 9.14531 26.3725 9.63344 25.8841C9.82625 25.6913 10.0472 25.4441 10.3 25.1603C11.6003 23.6975 13.7756 21.25 17.5 21.25C20.5884 21.25 22.5 23.1966 22.5 25C22.5 25.6903 23.0591 26.25 23.75 26.25C24.4409 26.25 25 25.6903 25 25C25 23.8181 24.5506 22.6022 23.7313 21.5581C24.1503 20.66 26.5119 16.25 32.5 16.25C35.99 16.25 37.2228 18.39 37.5 18.9922V29.2244Z" fill="white"></path>
                            </svg>
                        </small>
                        <span className="circle bg-primary"></span>
                        <p className='absolute top-10 left-5 text-darkpink text-xl'>Calories</p>
                    </div>
                    <h2 className='text-3xl font-medium'>57cal</h2>
                    <p className=''>Calories Burn</p>
                </div>

                <div className='bg-white min-w-[180px] flex flex-col items-center p-4 rounded-xl'>
                    <div className="inline-block mb-4 ms[-12] relative donut-chart-sale">
                        <span className="donut1" data-peity="{ &quot;fill&quot;: [&quot;rgb(192, 255, 134)&quot;, &quot;rgba(255, 255, 255, 1)&quot;],   &quot;innerRadius&quot;: 45, &quot;radius&quot;: 10}" style={{ display: 'none' }}>4/8</span>
                        <svg className="peity" height="110" width="110">
                            <path d="M 55 0 A 55 55 0 0 1 55 110 L 55 100 A 45 45 0 0 0 55 10" data-value="4" fill="rgb(192, 255, 134)"></path>
                            <path d="M 55 110 A 55 55 0 0 1 54.99999999999999 0 L 54.99999999999999 10 A 45 45 0 0 0 55 100" data-value="4" fill="rgba(255, 255, 255, 1)"></path>
                        </svg>
                        <small className="text-primary">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M39.9353 18.3544C39.8731 18.1666 38.3337 13.75 32.5 13.75C25.9703 13.75 22.8666 17.9659 21.795 19.8719C20.6306 19.1822 19.1838 18.75 17.5 18.75C15.7922 18.75 14.35 19.1375 13.1275 19.7072C13.5697 16.695 13.6987 13.1119 13.7353 11.25H17.5C17.9175 11.25 18.3081 11.0413 18.54 10.6934L21.04 6.94344C21.4075 6.39156 21.2806 5.64813 20.7494 5.25031C18.3166 3.42531 15.1269 1.25 13.75 1.25C11.6137 1.25 6.95688 6.24344 5.16469 9.38C0.0584378 18.3153 0 31.925 0 32.5C0 32.8797 0.172188 33.2391 0.46875 33.4759C7.56469 39.1522 15.7519 40 20 40C23.3716 40 29.9756 39.4391 36.3306 35.6834C38.5938 34.3456 40 31.8706 40 29.2244V18.75C40 18.6156 39.9781 18.4822 39.9353 18.3544ZM37.5 29.2244C37.5 30.9912 36.565 32.6419 35.0584 33.5316C29.2162 36.9844 23.1166 37.5 20 37.5C16.9178 37.5 9.15156 36.9453 2.51094 31.8981C2.58406 29.19 3.14094 17.96 7.33531 10.62C9.09187 7.54813 12.7112 4.16312 13.7722 3.76562C14.4606 3.96406 16.4566 5.23219 18.2972 6.55125L16.8309 8.75H12.5C11.8091 8.75 11.25 9.30969 11.25 10C11.25 10.0822 11.2344 17.9659 10.185 21.6878C9.46375 22.3391 8.88656 22.9872 8.43125 23.4994C8.2175 23.7403 8.02969 23.9522 7.86594 24.1166C7.3775 24.605 7.3775 25.3959 7.86594 25.8841C8.35437 26.3722 9.14531 26.3725 9.63344 25.8841C9.82625 25.6913 10.0472 25.4441 10.3 25.1603C11.6003 23.6975 13.7756 21.25 17.5 21.25C20.5884 21.25 22.5 23.1966 22.5 25C22.5 25.6903 23.0591 26.25 23.75 26.25C24.4409 26.25 25 25.6903 25 25C25 23.8181 24.5506 22.6022 23.7313 21.5581C24.1503 20.66 26.5119 16.25 32.5 16.25C35.99 16.25 37.2228 18.39 37.5 18.9922V29.2244Z" fill="white"></path>
                            </svg>
                        </small>
                        <span className="circle bg-primary"></span>
                        <p className='absolute top-10 left-10 text-darkpink text-xl'>Diet</p>
                    </div>
                    <h2 className='text-3xl font-medium'>4 Left</h2>
                    <p className=''>Diet Programs</p>
                </div>

                <div className='bg-white min-w-[180px] flex flex-col items-center p-4 rounded-xl'>
                    <div className="inline-block mb-4 ms[-12] relative donut-chart-sale">
                        <span className="donut1" data-peity="{ &quot;fill&quot;: [&quot;rgb(192, 255, 134)&quot;, &quot;rgba(255, 255, 255, 1)&quot;],   &quot;innerRadius&quot;: 45, &quot;radius&quot;: 10}" style={{ display: 'none' }}>4/8</span>
                        <svg className="peity" height="110" width="110">
                            <path d="M 55 0 A 55 55 0 0 1 55 110 L 55 100 A 45 45 0 0 0 55 10" data-value="4" fill="rgb(192, 255, 134)"></path>
                            <path d="M 55 110 A 55 55 0 0 1 54.99999999999999 0 L 54.99999999999999 10 A 45 45 0 0 0 55 100" data-value="4" fill="rgba(255, 255, 255, 1)"></path>
                        </svg>
                        <small className="text-primary">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M39.9353 18.3544C39.8731 18.1666 38.3337 13.75 32.5 13.75C25.9703 13.75 22.8666 17.9659 21.795 19.8719C20.6306 19.1822 19.1838 18.75 17.5 18.75C15.7922 18.75 14.35 19.1375 13.1275 19.7072C13.5697 16.695 13.6987 13.1119 13.7353 11.25H17.5C17.9175 11.25 18.3081 11.0413 18.54 10.6934L21.04 6.94344C21.4075 6.39156 21.2806 5.64813 20.7494 5.25031C18.3166 3.42531 15.1269 1.25 13.75 1.25C11.6137 1.25 6.95688 6.24344 5.16469 9.38C0.0584378 18.3153 0 31.925 0 32.5C0 32.8797 0.172188 33.2391 0.46875 33.4759C7.56469 39.1522 15.7519 40 20 40C23.3716 40 29.9756 39.4391 36.3306 35.6834C38.5938 34.3456 40 31.8706 40 29.2244V18.75C40 18.6156 39.9781 18.4822 39.9353 18.3544ZM37.5 29.2244C37.5 30.9912 36.565 32.6419 35.0584 33.5316C29.2162 36.9844 23.1166 37.5 20 37.5C16.9178 37.5 9.15156 36.9453 2.51094 31.8981C2.58406 29.19 3.14094 17.96 7.33531 10.62C9.09187 7.54813 12.7112 4.16312 13.7722 3.76562C14.4606 3.96406 16.4566 5.23219 18.2972 6.55125L16.8309 8.75H12.5C11.8091 8.75 11.25 9.30969 11.25 10C11.25 10.0822 11.2344 17.9659 10.185 21.6878C9.46375 22.3391 8.88656 22.9872 8.43125 23.4994C8.2175 23.7403 8.02969 23.9522 7.86594 24.1166C7.3775 24.605 7.3775 25.3959 7.86594 25.8841C8.35437 26.3722 9.14531 26.3725 9.63344 25.8841C9.82625 25.6913 10.0472 25.4441 10.3 25.1603C11.6003 23.6975 13.7756 21.25 17.5 21.25C20.5884 21.25 22.5 23.1966 22.5 25C22.5 25.6903 23.0591 26.25 23.75 26.25C24.4409 26.25 25 25.6903 25 25C25 23.8181 24.5506 22.6022 23.7313 21.5581C24.1503 20.66 26.5119 16.25 32.5 16.25C35.99 16.25 37.2228 18.39 37.5 18.9922V29.2244Z" fill="white"></path>
                            </svg>
                        </small>
                        <span className="circle bg-primary"></span>
                        <p className='absolute top-10 left-5 text-darkpink text-xl'>Sleeping</p>
                    </div>
                    <h2 className='text-3xl font-medium'>6 Hours</h2>
                    <p className=''>Sleeping Potency</p>
                </div>

                <div className='bg-white min-w-[180px] flex flex-col items-center p-4 rounded-xl'>
                    <div className="inline-block mb-4 ms[-12] relative donut-chart-sale">
                        <span className="donut1" data-peity="{ &quot;fill&quot;: [&quot;rgb(192, 255, 134)&quot;, &quot;rgba(255, 255, 255, 1)&quot;],   &quot;innerRadius&quot;: 45, &quot;radius&quot;: 10}" style={{ display: 'none' }}>4/8</span>
                        <svg className="peity" height="110" width="110">
                            <path d="M 55 0 A 55 55 0 0 1 55 110 L 55 100 A 45 45 0 0 0 55 10" data-value="4" fill="rgb(192, 255, 134)"></path>
                            <path d="M 55 110 A 55 55 0 0 1 54.99999999999999 0 L 54.99999999999999 10 A 45 45 0 0 0 55 100" data-value="4" fill="rgba(255, 255, 255, 1)"></path>
                        </svg>
                        <small className="text-primary">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M39.9353 18.3544C39.8731 18.1666 38.3337 13.75 32.5 13.75C25.9703 13.75 22.8666 17.9659 21.795 19.8719C20.6306 19.1822 19.1838 18.75 17.5 18.75C15.7922 18.75 14.35 19.1375 13.1275 19.7072C13.5697 16.695 13.6987 13.1119 13.7353 11.25H17.5C17.9175 11.25 18.3081 11.0413 18.54 10.6934L21.04 6.94344C21.4075 6.39156 21.2806 5.64813 20.7494 5.25031C18.3166 3.42531 15.1269 1.25 13.75 1.25C11.6137 1.25 6.95688 6.24344 5.16469 9.38C0.0584378 18.3153 0 31.925 0 32.5C0 32.8797 0.172188 33.2391 0.46875 33.4759C7.56469 39.1522 15.7519 40 20 40C23.3716 40 29.9756 39.4391 36.3306 35.6834C38.5938 34.3456 40 31.8706 40 29.2244V18.75C40 18.6156 39.9781 18.4822 39.9353 18.3544ZM37.5 29.2244C37.5 30.9912 36.565 32.6419 35.0584 33.5316C29.2162 36.9844 23.1166 37.5 20 37.5C16.9178 37.5 9.15156 36.9453 2.51094 31.8981C2.58406 29.19 3.14094 17.96 7.33531 10.62C9.09187 7.54813 12.7112 4.16312 13.7722 3.76562C14.4606 3.96406 16.4566 5.23219 18.2972 6.55125L16.8309 8.75H12.5C11.8091 8.75 11.25 9.30969 11.25 10C11.25 10.0822 11.2344 17.9659 10.185 21.6878C9.46375 22.3391 8.88656 22.9872 8.43125 23.4994C8.2175 23.7403 8.02969 23.9522 7.86594 24.1166C7.3775 24.605 7.3775 25.3959 7.86594 25.8841C8.35437 26.3722 9.14531 26.3725 9.63344 25.8841C9.82625 25.6913 10.0472 25.4441 10.3 25.1603C11.6003 23.6975 13.7756 21.25 17.5 21.25C20.5884 21.25 22.5 23.1966 22.5 25C22.5 25.6903 23.0591 26.25 23.75 26.25C24.4409 26.25 25 25.6903 25 25C25 23.8181 24.5506 22.6022 23.7313 21.5581C24.1503 20.66 26.5119 16.25 32.5 16.25C35.99 16.25 37.2228 18.39 37.5 18.9922V29.2244Z" fill="white"></path>
                            </svg>
                        </small>
                        <span className="circle bg-primary"></span>
                        <p className='absolute top-10 left-5 text-darkpink text-xl'>Persons</p>
                    </div>
                    <h2 className='text-3xl font-medium'>678 Person</h2>
                    <p className=''>Total Members</p>
                </div>
            </div>

            <div className='flex flex-col gap-4 justify-between bg-white rounded-xl p-4'>
                <div className='flex flex-row gap-4 justify-between'>
                    <p className='text-2xl font-semibold'>Workout Statistic</p>
                    <div className='flex flex-row gap-4 justify-between'>
                        <div>
                            <p>45%</p>
                            <p>Running</p>
                        </div>
                        <div>
                            <p>28%</p>
                            <p>Cycling</p>
                        </div>
                        <div>
                            <p>27%</p>
                            <p>Yoga</p>
                        </div>
                    </div>
                </div>
                <div className='w-full'>
                    <Line data={data} />
                </div>
            </div>

            <div className='bg-white rounded-xl p-4'>
                <div className='flex flex-col gap-4 justify-between'>
                    <p className='text-2xl font-semibold'>Calories Chart</p>
                    <Bar data={data1} />
                </div>
            </div>
        </div>
    );
};

export default MyDashboard;