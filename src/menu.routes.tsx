/**
=========================================================
* Material Dashboard 2 PRO React TS - v1.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-2-pro-react-ts
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/** 
  All of the routes for the Material Kit 2 PRO React React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Navbar.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `name` key is used for the name of the route on the Navbar.
  2. The `icon` key is used for the icon of the route on the Navbar.
  3. The `collapse` key is used for making a collapsible item on the Navbar that contains other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  4. The `route` key is used to store the route location which is used for the react router.
  5. The `href` key is used to store the external links location.
  7. The `dropdown` key is used to define that the item should open a dropdown for its collapse items .
  8. The `description` key is used to define the description of
          a route under its name.
  9. The `columns` key is used to define that how the content should look inside the dropdown menu as columns,
          you can set the columns amount based on this key.
  10. The `rowsPerColumn` key is used to define that how many rows should be in a column.
*/

// @mui material components
import Icon from "@mui/material/Icon";

const menuRoutes = [
  {
    name: "ADMIN",
    icon: <Icon>person</Icon>,
    columns: 4,
    rowsPerColumn: 1,
    collapse: [
      {
        name: "Organization",
        icon: <Icon>Organization</Icon>,
        collapse: [
          {
            name: "Currency",
            route: "/admin/organization/currency",
          }
        ],
      },
      {
        name: "Security",
        icon: <Icon>Security</Icon>,
        collapse: [
          {
            name: "Users",
            route: "/admin/security/users",
          }
        ],
      },
    ],

  },
  {
    name: "SALES",
    icon: <Icon>timeline</Icon>,
    columns: 4,
    rowsPerColumn: 1,
    collapse: [
      {
        name: "Master",
        icon: <Icon>login</Icon>,
        collapse: [
          {
            name: "Customer List",
            route: "/authentication/sign-in/basic",
          },
          {
            name: "Customer",
            route: "/authentication/sign-in/cover",
          },
          {
            name: "Buyback Vendor",
            route: "/authentication/sign-in/illustration",
          },
        ],
      },
      {
        name: "Envoice",
        icon: <Icon>assignment</Icon>,
        collapse: [
          {
            name: "E-Invoice",
            route: "/authentication/sign-up/cover",
          },
        ],
      },
      {
        name: "Day Close",
        icon: <Icon>restart_alt</Icon>,
        collapse: [
          {
            name: "Day Close",
            route: "/authentication/reset-password/cover",
          },
          {
            name: "Day Close List",
            route: "/authentication/reset-password/cover",
          },
          {
            name: "Day End ",
            route: "/authentication/reset-password/cover",
          },
          {
            name: "Day End Detail",
            route: "/authentication/reset-password/cover",
          },
        ],
      },
      {
        name: "CNDN",
        icon: <Icon>restart_alt</Icon>,
        collapse: [
          {
            name: "Direct Sale Return",
            route: "/authentication/reset-password/cover",
          },
          {
            name: "Direct Sale Return List",
            route: "/authentication/reset-password/cover",
          }
        ],
      },
    ],
  },
  {
    name: "PROCUREMENT",
    columns: 5,
    icon: <Icon>shopping-cart</Icon>,
    rowsPerColumn: 2,
    collapse: [
      {
        name: "Master",
        icon: <Icon>login</Icon>,
        collapse: [
          {
            name: "Insurer",
            route: "/authentication/sign-in/basic",
          },
          {
            name: "Items",
            route: "/authentication/sign-in/cover",
          },
          {
            name: "Suppliers",
            route: "/authentication/sign-in/illustration",
          },
          {
            name: "Couriers",
            route: "/authentication/sign-in/illustration",
          },
          {
            name: "Item List",
            route: "/authentication/sign-in/illustration",
          },
          {
            name: "Suppliers List",
            route: "/authentication/sign-in/illustration",
          },
          {
            name: "Item Price List",
            route: "/authentication/sign-in/illustration",
          },
          {
            name: "Quick Item Search",
            route: "/authentication/sign-in/illustration",
          },
          {
            name: "Purchase Price List ",
            route: "/authentication/sign-in/illustration",
          },
          {
            name: "Bar Code Printing",
            route: "/authentication/sign-in/illustration",
          },
          {
            name: "Batch",
            route: "/authentication/sign-in/illustration",
          }
        ],
      },
      {
        name: "CNDN",
        icon: <Icon>assignment</Icon>,
        collapse: [
          {
            name: "Direct Purchase Return",
            route: "/authentication/sign-up/cover",
          },
          {
            name: "Direct Purchase Return List",
            route: "/authentication/sign-up/cover",
          },
        ],
      },
      {
        name: "Order",
        icon: <Icon>restart_alt</Icon>,
        collapse: [
          {
            name: "Requisition",
            route: "/authentication/reset-password/cover",
          },
          {
            name: "Requisition List",
            route: "/authentication/reset-password/cover",
          },
          {
            name: "Purchase Order",
            route: "/authentication/reset-password/cover",
          },
          {
            name: "Purchase Order List",
            route: "/authentication/reset-password/cover",
          },
          {
            name: "Multi Purchase Order",
            route: "/authentication/reset-password/cover",
          },
        ],
      },
      {
        name: "Stock Count",
        icon: <Icon>restart_alt</Icon>,
        collapse: [
          {
            name: "Physical Stock Count",
            route: "/authentication/reset-password/cover",
          },
          {
            name: "Physical Stock Count List",
            route: "/authentication/reset-password/cover",
          },
          {
            name: "Stock Adjustment",
            route: "/authentication/reset-password/cover",
          },
          {
            name: "Stock Adjustment List",
            route: "/authentication/reset-password/cover",
          },
          {
            name: "Cycle Count",
            route: "/authentication/reset-password/cover",
          },
          {
            name: "Cycle Count List",
            route: "/authentication/reset-password/cover",
          }
        ],
      },
      {
        name: "Stock Transfer",
        icon: <Icon>restart_alt</Icon>,
        collapse: [
          {
            name: "Stock Outward",
            route: "/authentication/reset-password/cover",
          },
          {
            name: "Stock Outward List",
            route: "/authentication/reset-password/cover",
          },
          {
            name: "Stock Inward",
            route: "/authentication/reset-password/cover",
          },
          {
            name: "Godown Transfer",
            route: "/authentication/reset-password/cover",
          },
          {
            name: "Stock Inward List",
            route: "/authentication/reset-password/cover",
          },
          {
            name: "Godown Transfer List",
            route: "/authentication/reset-password/cover",
          }
        ],
      },
      {
        name: "Approvals",
        icon: <Icon>restart_alt</Icon>,
        collapse: [
          {
            name: "Requisition Approval",
            route: "/authentication/reset-password/cover",
          },
          {
            name: "Receipt(GRN) Approval",
            route: "/authentication/reset-password/cover",
          },
          {
            name: "Iblmenu_Approval Statement",
            route: "/authentication/reset-password/cover",
          },
          {
            name: "Approval/Rejection Statement",
            route: "/authentication/reset-password/cover",
          },
          {
            name: "Purchase Order Approval",
            route: "/authentication/reset-password/cover",
          },
          {
            name: "Cancellation Statement",
            route: "/authentication/reset-password/cover",
          }
        ],
      },
      {
        name: "Receipt/GRN",
        icon: <Icon>restart_alt</Icon>,
        collapse: [
          {
            name: "Receipt(GRN)",
            route: "/authentication/reset-password/cover",
          },
          {
            name: "Receipt(GRN) List",
            route: "/authentication/reset-password/cover",
          },
          {
            name: "Receipt(GRN) Return List",
            route: "/authentication/reset-password/cover",
          }
        ],
      },
      {
        name: "Invoice",
        icon: <Icon>restart_alt</Icon>,
        collapse: [
          {
            name: "Purchase Invoice",
            route: "/authentication/reset-password/cover",
          },
          {
            name: "Purchase Invoice List",
            route: "/authentication/reset-password/cover",
          },
          {
            name: "Purchase Return",
            route: "/authentication/reset-password/cover",
          },
          {
            name: "Purchase Invoice with Multiple Receipts",
            route: "/authentication/reset-password/cover",
          },
          {
            name: "Purchase Return List",
            route: "/authentication/reset-password/cover",
          },
          {
            name: "Expanse Transaction",
            route: "/authentication/reset-password/cover",
          },
          {
            name: "Expanse Transaction List",
            route: "/authentication/reset-password/cover",
          }
        ],
      },
      {
        name: "Stock Issue",
        icon: <Icon>restart_alt</Icon>,
        collapse: [
          {
            name: "Item Allotment",
            route: "/authentication/reset-password/cover",
          },
          {
            name: "Item Allotment List",
            route: "/authentication/reset-password/cover",
          },
          {
            name: "Item Allotment Return",
            route: "/authentication/reset-password/cover",
          },
          {
            name: "Item Allotment Return List",
            route: "/authentication/reset-password/cover",
          }
        ],
      },
    ],
  },
  {
    name: "FIFINANCENANCE",
    icon: <Icon>money</Icon>,
    columns: 6,
    rowsPerColumn: 2,
    collapse: [
      {
        name: "Master",
        icon: <Icon>shopping_cart</Icon>,
        collapse: [
          {
            name: "Account",
            route: "/ecommerce/orders/order-list",
          },
          {
            name: "Bank",
            route: "/ecommerce/orders/order-details",
          },
          {
            name: "Contact",
            route: "/ecommerce/orders/order-details",
          },
          {
            name: "Account List",
            route: "/ecommerce/orders/order-details",
          },
        ],
      },
      {
        name: "Journals",
        icon: <Icon>memory</Icon>,
        collapse: [
          {
            name: "Journal Voucher",
            route: "/ecommerce/products/new-product",
          },
          {
            name: "Journal Voucher List",
            route: "/ecommerce/products/edit-product",
          },
          {
            name: "Trade Advanced Journal Voucher",
            route: "/ecommerce/products/product-page",
          },
          {
            name: "Trade Advanced Journal Voucher List",
            route: "/ecommerce/products/product-page",
          },
          {
            name: "Payroll Journal Voucher",
            route: "/ecommerce/products/product-page",
          },
          {
            name: "Payroll Journal Voucher List",
            route: "/ecommerce/products/product-page",
          },
        ],
      },
      {
        name: "Bank Recouncillation Reports",
        icon: <Icon>memory</Icon>,
        collapse: [
          {
            name: "Recouncillation Statement",
            route: "/ecommerce/products/new-product",
          },
          {
            name: "Recouncillation Summary",
            route: "/ecommerce/products/edit-product",
          },
          {
            name: "Edit Bank Recouncillation",
            route: "/ecommerce/products/product-page",
          },
          {
            name: "Unrecouncillation Statement",
            route: "/ecommerce/products/product-page",
          }
        ],
      },
      {
        name: "Receipts",
        icon: <Icon>memory</Icon>,
        collapse: [
          {
            name: "Receipt",
            route: "/ecommerce/products/new-product",
          },
          {
            name: "Receipt List",
            route: "/ecommerce/products/edit-product",
          }
        ],
      },
      {
        name: "Cash/Bank Transfer",
        icon: <Icon>memory</Icon>,
        collapse: [
          {
            name: "Contra Voucher",
            route: "/ecommerce/products/new-product",
          },
          {
            name: "Contra Voucher List",
            route: "/ecommerce/products/edit-product",
          },
          {
            name: "Contra Approval",
            route: "/ecommerce/products/product-page",
          }
        ],
      },
      {
        name: "Party Recouncillation",
        icon: <Icon>memory</Icon>,
        collapse: [
          {
            name: "Party Recouncillation",
            route: "/ecommerce/products/new-product",
          },
          {
            name: "Recouncillation Statement",
            route: "/ecommerce/products/edit-product",
          },
          {
            name: "Edit Party Recouncillation",
            route: "/ecommerce/products/product-page",
          },
          {
            name: "Party JV Reco",
            route: "/ecommerce/products/product-page",
          }
        ],
      },
      {
        name: "Opening Balance",
        icon: <Icon>memory</Icon>,
        collapse: [
          {
            name: "Opening Voucher",
            route: "/ecommerce/products/new-product",
          },
          {
            name: "Opening Voucher List",
            route: "/ecommerce/products/edit-product",
          },
          {
            name: "Opening Balance",
            route: "/ecommerce/products/product-page",
          }
        ],
      },
      {
        name: "Payment",
        icon: <Icon>memory</Icon>,
        collapse: [
          {
            name: "Payment",
            route: "/ecommerce/products/new-product",
          },
          {
            name: "Payment List",
            route: "/ecommerce/products/edit-product",
          },
          {
            name: "Centralize Payment",
            route: "/ecommerce/products/product-page",
          },
          {
            name: "Centralize Payment List",
            route: "/ecommerce/products/product-page",
          },
          {
            name: "Distributors Payment",
            route: "/ecommerce/products/product-page",
          },
          {
            name: "Distributors Payment List",
            route: "/ecommerce/products/product-page",
          },
          {
            name: "Employee Payment",
            route: "/ecommerce/products/product-page",
          }
        ],
      },
      {
        name: "Financier Statement",
        icon: <Icon>memory</Icon>,
        collapse: [
          {
            name: "Financier",
            route: "/ecommerce/products/new-product",
          },
          {
            name: "Financier Case Statement",
            route: "/ecommerce/products/edit-product",
          },
          {
            name: "Financier Settlement",
            route: "/ecommerce/products/product-page",
          },
          {
            name: "Bajaj DO Report",
            route: "/ecommerce/products/product-page",
          },
          {
            name: "Post Financier Charges",
            route: "/ecommerce/products/product-page",
          },
          {
            name: "Pin Lab Statement",
            route: "/ecommerce/products/product-page",
          }
        ],
      },
      {
        name: "Notes",
        icon: <Icon>memory</Icon>,
        collapse: [
          {
            name: "Credit Note",
            route: "/ecommerce/products/new-product",
          },
          {
            name: "Credit Note List",
            route: "/ecommerce/products/edit-product",
          },
          {
            name: "Debit Note",
            route: "/ecommerce/products/product-page",
          },
          {
            name: "Debit Note List",
            route: "/ecommerce/products/product-page",
          }
        ],
      },
      {
        name: "Cheque",
        icon: <Icon>memory</Icon>,
        collapse: [
          {
            name: "Print Cheque Statement",
            route: "/ecommerce/products/new-product",
          }
        ],
      },
      {
        name: "Bank Reconcillation",
        icon: <Icon>memory</Icon>,
        collapse: [
          {
            name: "Credit Card Settlement",
            route: "/ecommerce/products/new-product",
          },
          {
            name: "Bank Recouncillation",
            route: "/ecommerce/products/edit-product",
          },
          {
            name: "Bank Pass Book",
            route: "/ecommerce/products/product-page",
          },
          {
            name: "Opening Bank Statement",
            route: "/ecommerce/products/product-page",
          }
        ],
      },
    ],
  },
  {
    name: "ACCOUNTING",
    icon: <Icon>work</Icon>,
    columns: 4,
    rowsPerColumn: 2,
    collapse: [
      {
        name: "Account Summeries",
        icon: <Icon>shopping_cart</Icon>,
        collapse: [
          {
            name: "Account Balance",
            route: "/ecommerce/orders/order-list",
          },
          {
            name: "Contact Balance",
            route: "/ecommerce/orders/order-details",
          }
        ],
      },
      {
        name: "Receviable & Payable",
        icon: <Icon>memory</Icon>,
        collapse: [
          {
            name: "Receviable & Payable Statement",
            route: "/ecommerce/products/new-product",
          },
          {
            name: "Ageing R & P",
            route: "/ecommerce/products/edit-product",
          },
          {
            name: "Receivable",
            route: "/ecommerce/products/product-page",
          },
          {
            name: "Receivable Statement",
            route: "/ecommerce/products/product-page",
          },
          {
            name: "Payable Statement",
            route: "/ecommerce/products/product-page",
          },
          {
            name: "Receivable-Payable-Calender By Month",
            route: "/ecommerce/products/product-page",
          },
          {
            name: "Payable Calender By Week",
            route: "/ecommerce/products/product-page",
          },
          {
            name: "Receivable-Payable-Calender",
            route: "/ecommerce/products/product-page",
          },
          {
            name: "Receivable Calender By Week",
            route: "/ecommerce/products/product-page",
          },
        ],
      },
      {
        name: "Books",
        icon: <Icon>memory</Icon>,
        collapse: [
          {
            name: "Cash Book",
            route: "/ecommerce/products/new-product",
          },
          {
            name: "Bank Book",
            route: "/ecommerce/products/edit-product",
          },
          {
            name: "Card Book",
            route: "/ecommerce/products/product-page",
          },
          {
            name: "Day Book",
            route: "/ecommerce/products/product-page",
          }
        ],
      },
      {
        name: "Financial Statement",
        icon: <Icon>memory</Icon>,
        collapse: [
          {
            name: "Income & Expanse Statement",
            route: "/ecommerce/products/new-product",
          },
          {
            name: "Trial Balance",
            route: "/ecommerce/products/edit-product",
          },
          {
            name: "Balance Sheet",
            route: "/ecommerce/products/edit-product",
          },
          {
            name: "Trading & PNL",
            route: "/ecommerce/products/edit-product",
          }
        ],
      },
      {
        name: "Ledgers",
        icon: <Icon>memory</Icon>,
        collapse: [
          {
            name: "Account Ledger",
            route: "/ecommerce/products/new-product",
          },
          {
            name: "Contact Ledger",
            route: "/ecommerce/products/edit-product",
          },
          {
            name: "Debator Statement",
            route: "/ecommerce/products/product-page",
          },
          {
            name: "Crediitor Statement",
            route: "/ecommerce/products/product-page",
          },
          {
            name: "Employee Ledger",
            route: "/ecommerce/products/product-page",
          },
          {
            name: "Buyback Vendor Ledger",
            route: "/ecommerce/products/product-page",
          }
        ],
      },
      {
        name: "Statutory Satetment",
        icon: <Icon>memory</Icon>,
        collapse: [
          {
            name: "GSTR 1 Offline Utility",
            route: "/ecommerce/products/new-product",
          },
          {
            name: "GSTR-3B_3.2",
            route: "/ecommerce/products/new-product",
          },
          {
            name: "GSTR 1",
            route: "/ecommerce/products/new-product",
          },
          {
            name: "GSTR-3B_4",
            route: "/ecommerce/products/new-product",
          },
          {
            name: "GSTR-3B_3.1",
            route: "/ecommerce/products/new-product",
          },
          {
            name: "GSTR 2 Statement",
            route: "/ecommerce/products/new-product",
          },
        ],
      }
    ],
  },
  {
    name: "REPORT",
    icon: <Icon>article</Icon>,
    columns: 4,
    rowsPerColumn: 2,
    collapse: [
      {
        name: "Sale Registers",
        icon: <Icon>shopping_cart</Icon>,
        collapse: [
          {
            name: "Sales BuyBack Summery",
            route: "/ecommerce/orders/order-list",
          },
          {
            name: "Sales Statement",
            route: "/ecommerce/orders/order-details",
          },
          {
            name: "Sales Summery",
            route: "/ecommerce/orders/order-details",
          }
        ],
      },
      {
        name: "Stock Report",
        icon: <Icon>memory</Icon>,
        collapse: [
          {
            name: "Item Ledger",
            route: "/ecommerce/products/new-product",
          },
          {
            name: "Stock Report By Branch",
            route: "/ecommerce/products/edit-product",
          },
          {
            name: "Stock Statement By vendor",
            route: "/ecommerce/products/product-page",
          },
          {
            name: "Stock Statement",
            route: "/ecommerce/products/product-page",
          },
          {
            name: "Iblmenu_Stock Summery W/o Pending Receipt",
            route: "/ecommerce/products/product-page",
          },
          {
            name: "Stock Summery With Value",
            route: "/ecommerce/products/product-page",
          }
        ],
      },
      {
        name: "Purchase Register",
        icon: <Icon>memory</Icon>,
        collapse: [
          {
            name: "Purchase Order Statement",
            route: "/ecommerce/products/new-product",
          },
          {
            name: "Purchase Order Summery",
            route: "/ecommerce/products/edit-product",
          },
          {
            name: "Purchase Pending Statement",
            route: "/ecommerce/products/product-page",
          },
          {
            name: "Purchase Register",
            route: "/ecommerce/products/product-page",
          },
          {
            name: "Requisition Statement",
            route: "/ecommerce/products/product-page",
          },
          {
            name: "Purchase Receipt Statement",
            route: "/ecommerce/products/new-product",
          },
          {
            name: "Purchase Receipt Summery",
            route: "/ecommerce/products/edit-product",
          },
          {
            name: "Purchase Statement",
            route: "/ecommerce/products/product-page",
          },
          {
            name: "Purchase Summery",
            route: "/ecommerce/products/product-page",
          },
          {
            name: "Purchase Return Statement",
            route: "/ecommerce/products/product-page",
          }
        ],
      },
      {
        name: "CST Reports",
        icon: <Icon>memory</Icon>,
        collapse: [
          {
            name: "C-Form Issuance",
            route: "/ecommerce/products/new-product",
          },
          {
            name: "CST Purchase Statment",
            route: "/ecommerce/products/edit-product",
          },
          {
            name: "C-Form Isuued Statement",
            route: "/ecommerce/products/edit-product",
          },
          {
            name: "CST Purchase Summery",
            route: "/ecommerce/products/edit-product",
          }
        ],
      },
      {
        name: "Inventory Registers",
        icon: <Icon>memory</Icon>,
        collapse: [
          {
            name: "Stock Register",
            route: "/ecommerce/products/new-product",
          },
          {
            name: "Godown/Location Transfer Statement",
            route: "/ecommerce/products/edit-product",
          },
          {
            name: "Inter Branch Transaction",
            route: "/ecommerce/products/product-page",
          },
          {
            name: "Stock Transfer Statement",
            route: "/ecommerce/products/product-page",
          }
        ],
      },
      {
        name: "Statutory Satetment",
        icon: <Icon>memory</Icon>,
        collapse: [
          {
            name: "Tax Register By Item",
            route: "/ecommerce/products/new-product",
          },
          {
            name: "Tax Statement",
            route: "/ecommerce/products/new-product",
          },
          {
            name: "Form F Statement",
            route: "/ecommerce/products/new-product",
          },
          {
            name: "Form J1 statement",
            route: "/ecommerce/products/new-product",
          },
          {
            name: "Form J2 statement",
            route: "/ecommerce/products/new-product",
          },
          {
            name: "LBT Statement",
            route: "/ecommerce/products/new-product",
          },
          {
            name: "Form 49 Tax Statement",
            route: "/ecommerce/products/new-product",
          }
        ],
      },
      {
        name: "Accounts Register",
        icon: <Icon>memory</Icon>,
        collapse: [
          {
            name: "Receipt Statement",
            route: "/ecommerce/products/new-product",
          },
          {
            name: "Account Register",
            route: "/ecommerce/products/edit-product",
          },
          {
            name: "Payment Statement",
            route: "/ecommerce/products/product-page",
          },
          {
            name: "Contra Statement",
            route: "/ecommerce/products/product-page",
          },
          {
            name: "Journal Voucher Statement",
            route: "/ecommerce/products/product-page",
          }
        ],
      },
      {
        name: "Other",
        icon: <Icon>memory</Icon>,
        collapse: [
          {
            name: "Overall Revenue",
            route: "/ecommerce/products/new-product",
          },
          {
            name: "Pending Invoice",
            route: "/ecommerce/products/edit-product",
          },
          {
            name: "Revenue Total Report",
            route: "/ecommerce/products/product-page",
          },
          {
            name: "Card Swiping Details",
            route: "/ecommerce/products/product-page",
          }
        ],
      }
    ],
  },
  {
    name: "POS",
    icon: <Icon>calculate</Icon>,
    route: "/ecommerce/products/new-product",
  }
];

export default menuRoutes;
