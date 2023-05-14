import { supabase } from "./../lib/supabaseClient";

import Head from "next/head";

import dynamic from "next/dynamic";

import React, { Suspense, Fragment, useRef, useState, useEffect } from "react";

import { useRouter } from "next/router";

const DynamicNavbar = dynamic(() => import("../components/navbar"), {});

const DynamicFooter = dynamic(() => import("../components/footer"), {});

const DynamicNavModal = dynamic(() => import("../components/navModal"), {});


function Waitlist({ users }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Mizan money - Waitlist</title>
      </Head>

      <main className="position-relative">
        {/* Navbar */}

        <DynamicNavbar />
        {/* End */}

        <section className="hero">
        <div className="tw-px-4 sm:tw-px-6 lg:tw-px-8">
      <div className="sm:tw-flex sm:tw-items-center">
        <div className="sm:tw-flex-auto">
          <h1 className="tw-text-base tw-font-semibold tw-leading-6 tw-text-gray-900">Waitlist</h1>
          <p className="tw-mt-2 tw-text-sm tw-text-gray-700">
            A list of all the users in your waitlist including their name, phone, and email.
          </p>
        </div>
      </div>
      <div className="tw-mt-8 tw-flow-root">
        <div className="tw--mx-4 tw--my-2 tw-overflow-x-auto sm:tw--mx-6 lg:tw--mx-8">
          <div className="tw-inline-block tw-min-w-full tw-py-2 tw-align-middle sm:tw-px-6 lg:tw-px-8">
            <div className="tw-overflow-hidden tw-shadow tw-ring-1 tw-ring-black tw-ring-opacity-5 sm:tw-rounded-lg">
              <table className="tw-min-w-full tw-divide-y tw-divide-gray-300">
                <thead className="tw-bg-gray-50">
                  <tr>
                    <th scope="col" className="tw-py-3.5 tw-pl-4 tw-pr-3 tw-text-left tw-text-sm tw-font-semibold tw-text-gray-900 sm:tw-pl-6">
                      Name
                    </th>
                    <th scope="col" className="tw-px-3 tw-py-3.5 tw-text-left tw-text-sm tw-font-semibold tw-text-gray-900">
                      Phone
                    </th>
                    <th scope="col" className="tw-px-3 tw-py-3.5 tw-text-left tw-text-sm tw-font-semibold tw-text-gray-900">
                      Email
                    </th>
                  </tr>
                </thead>
                <tbody className="tw-divide-y tw-divide-gray-200 tw-bg-white">
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td className="tw-whitespace-nowrap tw-py-4 tw-pl-4 tw-pr-3 tw-text-sm tw-font-medium tw-text-gray-900 sm:tw-pl-6">
                        {user.name}
                      </td>
                      <td className="tw-whitespace-nowrap tw-px-3 tw-py-4 tw-text-sm tw-text-gray-500">{user.phone}</td>
                      <td className="tw-whitespace-nowrap tw-px-3 tw-py-4 tw-text-sm tw-text-gray-500">{user.email}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
        </section>

        {/* Footer */}
        <DynamicFooter />
        {/* End */}
      </main>

      {/* models */}

      <DynamicNavModal />
    </>
  );
}

export async function getServerSideProps() {
  let { data } = await supabase.from("users").select();

  return {
    props: {
      users: data,
    },
  };
}

export default Waitlist;