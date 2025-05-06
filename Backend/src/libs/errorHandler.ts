export const sendErrorResponse = (res: any, status: Number, message: String, error: any) => {
    if (status == 500) {
        message = `Đã xảy ra lỗi trong quá trình ${message}. Vui lòng thử lại sau.`;
        console.log(`Lỗi trong quá trình ${message}: `, error.message);
    }

    return res.status(status).json({ success: false, message });
};