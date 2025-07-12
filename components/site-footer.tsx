export function SiteFooter() {
  return (
    <footer>
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="flex items-center justify-center py-8 px-4">
          <span className="text-sm text-gray-500 text-center dark:text-gray-400">
            © {new Date().getFullYear()} Yari Tech. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
